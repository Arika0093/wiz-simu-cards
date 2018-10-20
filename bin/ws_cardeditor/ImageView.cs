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
	public partial class ImageView : Form
	{
		public int ImageNumber = 0;
		public string ImagePrefix = "";

		public ImageView()
		{
			InitializeComponent();
		}
		public ImageView(int ino, string pref)
		{
			InitializeComponent();
			ImageNumber = ino;
			ImagePrefix = pref;
		}

		private void ImageView_Load(object sender, EventArgs e)
		{
			numericUpDown1.Value = ImageNumber;
			textBox1.Text = ImagePrefix;
			imageset(ImageNumber, ImagePrefix);
		}

		private void imageset(int img_no, string img_pref)
		{
			pictureBox1.ImageLocation =
				String.Format("http://i.quiz.colopl.jp/img/card/small/{1}card_{0:D5}_0.png", img_no, img_pref);
		}

		private void numericUpDown1_ValueChanged(object sender, EventArgs e)
		{
			ImageNumber = (int)numericUpDown1.Value;
			imageset(ImageNumber, ImagePrefix);
		}

		private void textBox1_TextChanged(object sender, EventArgs e)
		{
			ImagePrefix = textBox1.Text;
			imageset(ImageNumber, ImagePrefix);
		}

		private void button1_Click(object sender, EventArgs e)
		{
			DialogResult = DialogResult.OK;
			this.Close();
		}
	}
}
