using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Reflection;

namespace ws_cardeditor
{
	public partial class searchView : Form
	{
		public Dictionary<string, string> DicFile2Contents;

		[System.Runtime.InteropServices.DllImport("User32.dll")]
		static extern IntPtr SendMessage(IntPtr hWnd, int msg, int wParam, int[] lParam);

		public searchView()
		{
			InitializeComponent();
		}

		private async void searchView_Load(object sender, EventArgs e)
		{
			// tabSize set
			const int EM_SETTABSTOPS = 0x00CB;
			SendMessage(textBox2.Handle, EM_SETTABSTOPS, 1, new int[] { 16 });
			// loading js contents
			DicFile2Contents = new Dictionary<string, string>();
			var assPath = new Uri(Assembly.GetExecutingAssembly().Location);
			var segmentDirPath = new Uri(assPath, "../cards/").LocalPath;
			var files = Directory.GetFiles(segmentDirPath, "*.js", SearchOption.TopDirectoryOnly);
			var count = 1;
			foreach(var f in files) {
				Text = "精霊ロード中… [" + count + "/" + files.Length + "]";
				var sr = new StreamReader(f);
				DicFile2Contents.Add(Path.GetFileName(f), await sr.ReadToEndAsync());
				sr.Close();
				count++;
			}
			Text = "精霊ロード完了！";
		}

		private void textBox1_TextChanged(object sender, EventArgs e)
		{
			var input = textBox1.Text;
			listBox1.Items.Clear();
			foreach(var dic in DicFile2Contents) {
				var key = dic.Key;
				var val = dic.Value;
				if(val.IndexOf(input) >= 0) {
					listBox1.Items.Add(Path.GetFileName(key));
				}
			}
		}

		private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
		{
			if(textBox1.Text.Length <= 0) {
				return;
			}
			var selValue = (string)listBox1.SelectedItem;
			if(selValue == "") {
				return;
			}
			var contents = DicFile2Contents[selValue];
			textBox2.Text = contents;
		}


	}
}
