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
	public partial class AwakeList : Form
	{
		public List<string> awakes;
		AwakeEdit Editor = new AwakeEdit();

		public AwakeList(List<string> awlist)
		{
			InitializeComponent();
			awakes = awlist;
		}

		// Load
		private void AwakeList_Load(object sender, EventArgs e)
		{
			foreach(var s in awakes) {
				listBox1.Items.Add(s);
			}
		}

		// Add
		private void button1_Click(object sender, EventArgs e)
		{
			if(Editor.ShowDialog() == DialogResult.OK) {
				listBox1.Items.Add(Editor.result);
				awakes.Add(Editor.result);
			}
		}

		// Delete
		private void button2_Click(object sender, EventArgs e)
		{
			if(listBox1.SelectedIndex >= 0) {
				var si = listBox1.SelectedIndex;
				listBox1.Items.RemoveAt(si);
				awakes.RemoveAt(si);
			}
		}

		// Close
		private void button3_Click(object sender, EventArgs e)
		{
			Close();
		}
	}
}
