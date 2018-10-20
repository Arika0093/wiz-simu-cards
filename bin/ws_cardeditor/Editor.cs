using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace ws_cardeditor
{
	public partial class Editor : Form
	{
		List<string> awakes = new List<string>();
		List<string> Lawake = new List<string>();

		public Editor()
		{
			InitializeComponent();
		}

		private void Editor_Load(object sender, EventArgs e)
		{
			attr_1.SelectedIndex = 0;
			attr_2.SelectedIndex = 0;
		}

		private void generatejs_Click(object sender, EventArgs e)
		{
			var js = generateJs();
			var jstxt = js.toString();
			jsexport.Text = jstxt;

			// File Save
			var name = js.name.Replace(" ", "_");
			var replacedName = Regex.Replace(name, "[<>.\\\":!?]", "");
			var id = js.cardno;
			var filename = String.Format("{0:D5}_{1}.js", id, replacedName);
			// Write
			var wt = new StreamWriter("../cards/" + filename);
			wt.Write(jstxt);
			wt.Close();

			Clipboard.SetDataObject(jstxt, true);
			MessageBox.Show("Save Successed.");
		}

		private void awake_edit_Click(object sender, EventArgs e)
		{
			var als = new AwakeList(awakes);
			als.ShowDialog(this);
			awakes = als.awakes;
		}

		private void Lawake_edit_Click(object sender, EventArgs e)
		{
			var als = new AwakeList(Lawake);
			als.ShowDialog(this);
			Lawake = als.awakes;
		}

		private void reset_Click(object sender, EventArgs e)
		{
			// all reset
			awakes.Clear();
			Lawake.Clear();
			t_name.Text =
			as1_desc.Text =
			as1_proc.Text =
			ss1_desc.Text =
			ss1_proc.Text =
			as2_desc.Text =
			as2_proc.Text =
			ss2_desc.Text =
			ss2_proc.Text = "";
			cardno.Value =
			imageno.Value = -1;
			hp.Value =
			atk.Value = 0;
			cost.Value = 1;
			ss1_turn.Value =
			ss2_turn.Value =
			ss1_charge.Value =
			ss2_charge.Value = 0;
			attr_1.SelectedIndex =
			attr_2.SelectedIndex = 0;
			species.SelectedIndex = -1;
		}

		private void detailshow_Click(object sender, EventArgs e)
		{
			var num = (int)imageno.Value;
			var pref = imageno_prefix.Text;
			var dlg = new ImageView(num, pref);
			if(dlg.ShowDialog(this) == DialogResult.OK) {
				imageno.Value = (int)dlg.ImageNumber;
				imageno_prefix.Text = dlg.ImagePrefix;
			}
		}

		private wcard generateJs()
		{
			var ws = new wcard();
			ws.name = t_name.Text;
			ws.cardno = (int)cardno.Value;
			ws.imageno = (int)imageno.Value;
			ws.hp = (int)hp.Value;
			ws.atk = (int)atk.Value;
			ws.cost = (int)cost.Value;
			ws.attr[0] = attr_1.SelectedIndex - 1;
			ws.attr[1] = attr_2.SelectedIndex - 1;
			ws.species = species.SelectedIndex;
			ws.islegend = Lawake.Count > 0;
			ws.awakes = awakes.ToArray();
			ws.ape = textBox1.Text;
			ws.is_dist = checkBox1.Checked;
			ws.as1_desc = as1_desc.Text;
			ws.as1_proc = as1_proc.Text;
			ws.ss1_desc = ss1_desc.Text;
			ws.ss1_turn = (int)ss1_turn.Value;
			ws.ss1_charge = (int)ss1_charge.Value;
			ws.ss1_proc = ss1_proc.Text;
			if(ws.islegend) {
				ws.as2_desc = as2_desc.Text;
				ws.as2_proc = as2_proc.Text;
				ws.ss2_desc = ss2_desc.Text;
				ws.ss2_turn = (int)ss2_turn.Value;
				ws.ss2_charge = (int)ss2_charge.Value;
				ws.ss2_proc = ss2_proc.Text;
				ws.Lawake = Lawake.ToArray();
			}

			return ws;
		}
	}
}
