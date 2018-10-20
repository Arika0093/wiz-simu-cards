using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ws_cardeditor
{
	public partial class DirectEditor : Form
	{
		public string EditString = "";

		[System.Runtime.InteropServices.DllImport("User32.dll")]
		static extern IntPtr SendMessage(IntPtr hWnd, int msg, int wParam, int[] lParam);

		public DirectEditor()
		{
			InitializeComponent();
		}

		public DirectEditor(string edit)
		{
			EditString = edit;
			InitializeComponent();
		}

		public DirectEditor(string edit, bool showTopmost)
		{
			EditString = edit;
			TopMost = showTopmost;
			InitializeComponent();
		}

		private void DirectEditor_Load(object sender, EventArgs e)
		{
			// tabSize set
			const int EM_SETTABSTOPS = 0x00CB;
			SendMessage(textBox1.Handle, EM_SETTABSTOPS, 1, new int[] { 16 });
			// text set
			textBox1.Text = EditString;

			textBox1.Select(0, 0);
		}

		private void button1_Click(object sender, EventArgs e)
		{
			EditString = textBox1.Text;
			SaveData();
			DialogResult = DialogResult.OK;
		}

		private void SaveData()
		{
			// save this
			var jedit = this.EditString;
			// File Save
			// regex matching
			var nameMatch = Regex.Match(jedit, @"name:\s*(.+),");
			var crnoMatch = Regex.Match(jedit, @"cardno:\s*(\d+),");
			var name = nameMatch.Groups[1].Value;
			var id = -1;
			int.TryParse(crnoMatch.Groups[1].Value, out id);
			var replacedName = Regex.Replace(name, "[<>.\\\":!?]", "");
			var filename = String.Format("{0:D5}_{1}.js", id, replacedName);
			// Write
			var wt = new StreamWriter("../cards/" + filename);
			wt.Write(jedit);
			wt.Close();

			MessageBox.Show("Save Successed.");
		}

	}
}
