using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace ws_cardeditor
{
	public partial class AwakeEdit : Form
	{
		public string result = "";
		public AwakeType[] atypes = new AwakeType[]{
			new AwakeType("攻撃力アップ/HPアップ", false, false, 100, "HP", "ATK", a => {
				return "Statusup(" + a.param1 + "," + a.param2 + ")";
			}),
			new AwakeType("属性攻撃力アップ/HPアップ", true, false, 100, "HP", "ATK", a => {
				return "Attr_statusup(" + a.param1 + "," + a.param2 + ", " + a.ArrtoStr(a.attrs) + ")";
			}),
			new AwakeType("種族攻撃力アップ/HPアップ", false, true, 100, "HP", "ATK", a => {
				return "Spec_statusup(" + a.param1 + "," + a.param2 + ", " + a.ArrtoStr(a.specs.ToArray()) + ")";
			}),
			new AwakeType("副属性考慮攻撃力アップ", true, false, true, false, 100, "ATK(def)", "ATK(sub)", a => {
				return "Attr_statusup_sattr(0, " + a.param1 + ", " + a.ArrtoStr(a.attrs) + ", 0," + a.param2 + ", " + a.ArrtoStr(a.attrs_sub) + ")";
			}),
			new AwakeType("副属性考慮HPアップ", true, false, true, false, 100, "HP(def)", "HP(sub)", a => {
				return "Attr_statusup_sattr(" + a.param1 + ", 0, " + a.ArrtoStr(a.attrs) + ", "  + a.param2 +", 0, " + a.ArrtoStr(a.attrs_sub) + ")";
			}),
			new AwakeType("単属性攻撃力アップ/HPアップ", true, false, 100, "HP", "ATK", a => {
				return "Attr_statusup_oattr(" + a.param1 + "," + a.param2 + ", " + a.ArrtoStr(a.attrs) + ")";
			}),
			new AwakeType("複属性攻撃力アップ/HPアップ", true, false, 100, "HP", "ATK", a => {
				return "Attr_statusup_subattr(" + a.param1 + "," + a.param2 + ", " + a.ArrtoStr(a.attrs) + ")";
			}),
			new AwakeType("パネルブースト", true, false, 1, "効果値", "", a => {
				return "Panel_boost(" + a.ArrtoStr(a.attrs) + "," + a.param1 + ")";
			}),
			new AwakeType("属性軽減", true, false, 10, "軽減率(%)", "", a => {
				return "Attr_relief(" + a.ArrtoStr(a.attrs) + "," + a.param1 + ")";
			}),
			new AwakeType("コストダウン", false, false, 1, "コスト減少幅", "", a => {
				return "Costdown(" + a.param1 + ")";
			}),
			new AwakeType("ファストスキル", false, false, 1, "ターン減少幅", "", a => {
				return "Fastskill(" + a.param1 + ")";
			}),
			new AwakeType("九死一生", false, false, 30, "生存確率(%)", "", a => {
				return "NEFTJOD(" + a.param1 + ")";
			}),
			new AwakeType("戦後回復", false, false, 10, "回復量(%)", "", a => {
				return "Heal_afterbattle(" + a.param1 + ")";
			}),
			new AwakeType("指定異常無効", false, false, false, true, 0, "", "", a => {
				return "Abstate_invalid(\"" + a.text + "\")";
			}),
			new AwakeType("その他効果", false, false, false, true, 1, "効果値", "", a => {
				return "Awake_noeffect(\"" + a.text + "\"," + a.param1 + ")";
			}),
			new AwakeType("直接入力", false, false, false, true, 1, "", "", a => {
				return a.text;
			}),
			new AwakeType("コメント(任意)", false, false, false, true, 0, "", "", a => {
				return "// " + a.text;
			}),
		};

		public AwakeEdit()
		{
			InitializeComponent();
			foreach(var a in atypes) {
				comboBox1.Items.Add(a.name);
			}
		}

		private void AwakeEdit_Load(object sender, EventArgs e)
		{
		}

		private void button1_Click(object sender, EventArgs e)
		{
			// create object
			AwakeType a = atypes[comboBox1.SelectedIndex];
			a.attrs = new int[5];
			a.attrs_sub = new int[5];
			a.specs = new List<int>();

			a.attrs[0] = checkBox1.Checked ? 1 : 0;
			a.attrs[1] = checkBox2.Checked ? 1 : 0;
			a.attrs[2] = checkBox3.Checked ? 1 : 0;
			a.attrs[3] = checkBox4.Checked ? 1 : 0;
			a.attrs[4] = checkBox5.Checked ? 1 : 0;
			a.attrs_sub[0] = checkBox22.Checked ? 1 : 0;
			a.attrs_sub[1] = checkBox21.Checked ? 1 : 0;
			a.attrs_sub[2] = checkBox20.Checked ? 1 : 0;
			a.attrs_sub[3] = checkBox19.Checked ? 1 : 0;
			a.attrs_sub[4] = checkBox18.Checked ? 1 : 0;

			if(checkBox10.Checked) {
				a.specs.Add(0);
			}
			if(checkBox9.Checked){ a.specs.Add(1); }
			if(checkBox8.Checked){ a.specs.Add(2); }
			if(checkBox7.Checked){ a.specs.Add(3); }
			if(checkBox6.Checked){ a.specs.Add(4); }
			if(checkBox11.Checked){ a.specs.Add(5); }
			if(checkBox17.Checked){ a.specs.Add(6); }
			if(checkBox16.Checked){ a.specs.Add(7); }
			if(checkBox15.Checked){ a.specs.Add(8); }
			if(checkBox14.Checked){ a.specs.Add(9); }
			if(checkBox13.Checked){ a.specs.Add(10); }
			if(checkBox12.Checked){ a.specs.Add(11); }
			a.param1 = (int)numericUpDown1.Value;
			a.param2 = (int)numericUpDown2.Value;
			a.text = textBox1.Text;

			result = a.fc(a);

			DialogResult = DialogResult.OK;
			Close();
		}

		private void button2_Click(object sender, EventArgs e)
		{
			DialogResult = DialogResult.Cancel;
			Close();
		}

		private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
		{
			AwakeType atype;
			var i = comboBox1.SelectedIndex;
			if(i >= 0) {
				atype = atypes[i];
			}
			else {
				atype = new AwakeType("", false, false, 0, "", "", a => {
					return "";
				});
			}
			groupBox2.Text = atype.value1;
			groupBox3.Text = atype.value2;
			groupBox1.Enabled = atype.isable_attr;
			groupBox2.Enabled = atype.value1 != "";
			groupBox3.Enabled = atype.value2 != "";
			groupBox4.Enabled = atype.isable_spec;
			groupBox5.Enabled = atype.isable_text;
			groupBox6.Enabled = atype.isable_attr_s;
			numericUpDown1.Value = 0;
			numericUpDown2.Value = 0;
			numericUpDown1.Increment = atype.val_increment;
			numericUpDown2.Increment = atype.val_increment;
			textBox1.Text = "";
			button1.Enabled = true;
		}
	}

	public class AwakeType
	{
		public AwakeType(string n, bool a, bool s, int i, string v1, string v2, Func<AwakeType, string> f){
			name = n;
			isable_attr = a;
			isable_attr_s = false;
			isable_spec = s;
			isable_text = false;
			val_increment = i;
			value1 = v1;
			value2 = v2;
			fc = f;
		}
		public AwakeType(string n, bool a, bool s, bool a_s, bool t, int i, string v1, string v2, Func<AwakeType, string> f)
		{
			name = n;
			isable_attr = a;
			isable_attr_s = a_s;
			isable_spec = s;
			isable_text = t;
			val_increment = i;
			value1 = v1;
			value2 = v2;
			fc = f;
		}
		public string name;
		public bool isable_attr;
		public bool isable_attr_s;
		public bool isable_spec;
		public bool isable_text;
		public int[] attrs;
		public int[] attrs_sub;
		public List<int> specs;
		public string value1;
		public string value2;
		public int val_increment;
		public int param1;
		public int param2;
		public string text;
		public Func<AwakeType, string> fc;
		public string ArrtoStr(Array obj){
			string rst = "[";
			foreach(var o in obj) {
				rst += o.ToString() + ",";
			}
			return rst + "]";
		}
	}
}
