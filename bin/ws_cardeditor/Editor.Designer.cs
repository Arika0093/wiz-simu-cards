namespace ws_cardeditor
{
	partial class Editor
	{
		/// <summary>
		/// 必要なデザイナー変数です。
		/// </summary>
		private System.ComponentModel.IContainer components = null;

		/// <summary>
		/// 使用中のリソースをすべてクリーンアップします。
		/// </summary>
		/// <param name="disposing">マネージ リソースが破棄される場合 true、破棄されない場合は false です。</param>
		protected override void Dispose(bool disposing)
		{
			if(disposing && (components != null)) {
				components.Dispose();
			}
			base.Dispose(disposing);
		}

		#region Windows フォーム デザイナーで生成されたコード

		/// <summary>
		/// デザイナー サポートに必要なメソッドです。このメソッドの内容を
		/// コード エディターで変更しないでください。
		/// </summary>
		private void InitializeComponent()
		{
			this.splitContainer1 = new System.Windows.Forms.SplitContainer();
			this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
			this.label14 = new System.Windows.Forms.Label();
			this.flowLayoutPanel5 = new System.Windows.Forms.FlowLayoutPanel();
			this.hp = new System.Windows.Forms.NumericUpDown();
			this.atk = new System.Windows.Forms.NumericUpDown();
			this.cost = new System.Windows.Forms.NumericUpDown();
			this.label13 = new System.Windows.Forms.Label();
			this.flowLayoutPanel4 = new System.Windows.Forms.FlowLayoutPanel();
			this.ss2_desc = new System.Windows.Forms.TextBox();
			this.ss2_turn = new System.Windows.Forms.NumericUpDown();
			this.ss2_charge = new System.Windows.Forms.NumericUpDown();
			this.label3 = new System.Windows.Forms.Label();
			this.ss2_proc = new System.Windows.Forms.TextBox();
			this.ss1_proc = new System.Windows.Forms.TextBox();
			this.as2_proc = new System.Windows.Forms.TextBox();
			this.as2_desc = new System.Windows.Forms.TextBox();
			this.as1_proc = new System.Windows.Forms.TextBox();
			this.as1_desc = new System.Windows.Forms.TextBox();
			this.label12 = new System.Windows.Forms.Label();
			this.label11 = new System.Windows.Forms.Label();
			this.label10 = new System.Windows.Forms.Label();
			this.label9 = new System.Windows.Forms.Label();
			this.label8 = new System.Windows.Forms.Label();
			this.label7 = new System.Windows.Forms.Label();
			this.label6 = new System.Windows.Forms.Label();
			this.label5 = new System.Windows.Forms.Label();
			this.label4 = new System.Windows.Forms.Label();
			this.label2 = new System.Windows.Forms.Label();
			this.label1 = new System.Windows.Forms.Label();
			this.t_name = new System.Windows.Forms.TextBox();
			this.generatejs = new System.Windows.Forms.Button();
			this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
			this.cardno = new System.Windows.Forms.NumericUpDown();
			this.imageno = new System.Windows.Forms.NumericUpDown();
			this.imageno_prefix = new System.Windows.Forms.TextBox();
			this.detailshow = new System.Windows.Forms.Button();
			this.flowLayoutPanel2 = new System.Windows.Forms.FlowLayoutPanel();
			this.attr_1 = new System.Windows.Forms.ComboBox();
			this.attr_2 = new System.Windows.Forms.ComboBox();
			this.species = new System.Windows.Forms.ComboBox();
			this.flowLayoutPanel3 = new System.Windows.Forms.FlowLayoutPanel();
			this.ss1_desc = new System.Windows.Forms.TextBox();
			this.ss1_turn = new System.Windows.Forms.NumericUpDown();
			this.ss1_charge = new System.Windows.Forms.NumericUpDown();
			this.flowLayoutPanel6 = new System.Windows.Forms.FlowLayoutPanel();
			this.awake_edit = new System.Windows.Forms.Button();
			this.Lawake_edit = new System.Windows.Forms.Button();
			this.reset = new System.Windows.Forms.Button();
			this.flowLayoutPanel7 = new System.Windows.Forms.FlowLayoutPanel();
			this.textBox1 = new System.Windows.Forms.TextBox();
			this.checkBox1 = new System.Windows.Forms.CheckBox();
			this.jsexport = new System.Windows.Forms.TextBox();
			((System.ComponentModel.ISupportInitialize)(this.splitContainer1)).BeginInit();
			this.splitContainer1.Panel1.SuspendLayout();
			this.splitContainer1.Panel2.SuspendLayout();
			this.splitContainer1.SuspendLayout();
			this.tableLayoutPanel1.SuspendLayout();
			this.flowLayoutPanel5.SuspendLayout();
			((System.ComponentModel.ISupportInitialize)(this.hp)).BeginInit();
			((System.ComponentModel.ISupportInitialize)(this.atk)).BeginInit();
			((System.ComponentModel.ISupportInitialize)(this.cost)).BeginInit();
			this.flowLayoutPanel4.SuspendLayout();
			((System.ComponentModel.ISupportInitialize)(this.ss2_turn)).BeginInit();
			((System.ComponentModel.ISupportInitialize)(this.ss2_charge)).BeginInit();
			this.flowLayoutPanel1.SuspendLayout();
			((System.ComponentModel.ISupportInitialize)(this.cardno)).BeginInit();
			((System.ComponentModel.ISupportInitialize)(this.imageno)).BeginInit();
			this.flowLayoutPanel2.SuspendLayout();
			this.flowLayoutPanel3.SuspendLayout();
			((System.ComponentModel.ISupportInitialize)(this.ss1_turn)).BeginInit();
			((System.ComponentModel.ISupportInitialize)(this.ss1_charge)).BeginInit();
			this.flowLayoutPanel6.SuspendLayout();
			this.flowLayoutPanel7.SuspendLayout();
			this.SuspendLayout();
			// 
			// splitContainer1
			// 
			this.splitContainer1.Dock = System.Windows.Forms.DockStyle.Fill;
			this.splitContainer1.Location = new System.Drawing.Point(0, 0);
			this.splitContainer1.Name = "splitContainer1";
			// 
			// splitContainer1.Panel1
			// 
			this.splitContainer1.Panel1.Controls.Add(this.tableLayoutPanel1);
			// 
			// splitContainer1.Panel2
			// 
			this.splitContainer1.Panel2.Controls.Add(this.jsexport);
			this.splitContainer1.Size = new System.Drawing.Size(912, 489);
			this.splitContainer1.SplitterDistance = 625;
			this.splitContainer1.TabIndex = 0;
			// 
			// tableLayoutPanel1
			// 
			this.tableLayoutPanel1.ColumnCount = 2;
			this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 140F));
			this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
			this.tableLayoutPanel1.Controls.Add(this.label14, 0, 5);
			this.tableLayoutPanel1.Controls.Add(this.flowLayoutPanel5, 1, 2);
			this.tableLayoutPanel1.Controls.Add(this.label13, 0, 2);
			this.tableLayoutPanel1.Controls.Add(this.flowLayoutPanel4, 1, 12);
			this.tableLayoutPanel1.Controls.Add(this.label3, 0, 4);
			this.tableLayoutPanel1.Controls.Add(this.ss2_proc, 1, 13);
			this.tableLayoutPanel1.Controls.Add(this.ss1_proc, 1, 11);
			this.tableLayoutPanel1.Controls.Add(this.as2_proc, 1, 9);
			this.tableLayoutPanel1.Controls.Add(this.as2_desc, 1, 8);
			this.tableLayoutPanel1.Controls.Add(this.as1_proc, 1, 7);
			this.tableLayoutPanel1.Controls.Add(this.as1_desc, 1, 6);
			this.tableLayoutPanel1.Controls.Add(this.label12, 0, 13);
			this.tableLayoutPanel1.Controls.Add(this.label11, 0, 12);
			this.tableLayoutPanel1.Controls.Add(this.label10, 0, 11);
			this.tableLayoutPanel1.Controls.Add(this.label9, 0, 10);
			this.tableLayoutPanel1.Controls.Add(this.label8, 0, 9);
			this.tableLayoutPanel1.Controls.Add(this.label7, 0, 8);
			this.tableLayoutPanel1.Controls.Add(this.label6, 0, 7);
			this.tableLayoutPanel1.Controls.Add(this.label5, 0, 6);
			this.tableLayoutPanel1.Controls.Add(this.label4, 0, 3);
			this.tableLayoutPanel1.Controls.Add(this.label2, 0, 1);
			this.tableLayoutPanel1.Controls.Add(this.label1, 0, 0);
			this.tableLayoutPanel1.Controls.Add(this.t_name, 1, 0);
			this.tableLayoutPanel1.Controls.Add(this.generatejs, 1, 14);
			this.tableLayoutPanel1.Controls.Add(this.flowLayoutPanel1, 1, 1);
			this.tableLayoutPanel1.Controls.Add(this.flowLayoutPanel2, 1, 3);
			this.tableLayoutPanel1.Controls.Add(this.flowLayoutPanel3, 1, 10);
			this.tableLayoutPanel1.Controls.Add(this.flowLayoutPanel6, 1, 4);
			this.tableLayoutPanel1.Controls.Add(this.reset, 0, 14);
			this.tableLayoutPanel1.Controls.Add(this.flowLayoutPanel7, 1, 5);
			this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
			this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 0);
			this.tableLayoutPanel1.Name = "tableLayoutPanel1";
			this.tableLayoutPanel1.RowCount = 15;
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 30F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 31F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 30F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 33F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 36F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
			this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
			this.tableLayoutPanel1.Size = new System.Drawing.Size(625, 489);
			this.tableLayoutPanel1.TabIndex = 0;
			// 
			// label14
			// 
			this.label14.AutoSize = true;
			this.label14.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label14.Location = new System.Drawing.Point(3, 160);
			this.label14.Name = "label14";
			this.label14.Size = new System.Drawing.Size(134, 32);
			this.label14.TabIndex = 28;
			this.label14.Text = "登場イベ/is配布:";
			this.label14.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// flowLayoutPanel5
			// 
			this.flowLayoutPanel5.Controls.Add(this.hp);
			this.flowLayoutPanel5.Controls.Add(this.atk);
			this.flowLayoutPanel5.Controls.Add(this.cost);
			this.flowLayoutPanel5.Dock = System.Windows.Forms.DockStyle.Fill;
			this.flowLayoutPanel5.Location = new System.Drawing.Point(140, 61);
			this.flowLayoutPanel5.Margin = new System.Windows.Forms.Padding(0);
			this.flowLayoutPanel5.Name = "flowLayoutPanel5";
			this.flowLayoutPanel5.Size = new System.Drawing.Size(485, 30);
			this.flowLayoutPanel5.TabIndex = 15;
			// 
			// hp
			// 
			this.hp.Location = new System.Drawing.Point(3, 3);
			this.hp.Maximum = new decimal(new int[] {
            99999,
            0,
            0,
            0});
			this.hp.Name = "hp";
			this.hp.Size = new System.Drawing.Size(188, 25);
			this.hp.TabIndex = 0;
			this.hp.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
			this.hp.Value = new decimal(new int[] {
            1000,
            0,
            0,
            0});
			// 
			// atk
			// 
			this.atk.Location = new System.Drawing.Point(197, 3);
			this.atk.Maximum = new decimal(new int[] {
            99999,
            0,
            0,
            0});
			this.atk.Name = "atk";
			this.atk.Size = new System.Drawing.Size(212, 25);
			this.atk.TabIndex = 1;
			this.atk.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
			this.atk.Value = new decimal(new int[] {
            1000,
            0,
            0,
            0});
			// 
			// cost
			// 
			this.cost.Location = new System.Drawing.Point(415, 3);
			this.cost.Maximum = new decimal(new int[] {
            999,
            0,
            0,
            0});
			this.cost.Minimum = new decimal(new int[] {
            1,
            0,
            0,
            0});
			this.cost.Name = "cost";
			this.cost.Size = new System.Drawing.Size(67, 25);
			this.cost.TabIndex = 2;
			this.cost.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
			this.cost.Value = new decimal(new int[] {
            1,
            0,
            0,
            0});
			// 
			// label13
			// 
			this.label13.AutoSize = true;
			this.label13.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label13.Location = new System.Drawing.Point(3, 61);
			this.label13.Name = "label13";
			this.label13.Size = new System.Drawing.Size(134, 30);
			this.label13.TabIndex = 2;
			this.label13.Text = "HP/ATK/Cost:";
			this.label13.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// flowLayoutPanel4
			// 
			this.flowLayoutPanel4.Controls.Add(this.ss2_desc);
			this.flowLayoutPanel4.Controls.Add(this.ss2_turn);
			this.flowLayoutPanel4.Controls.Add(this.ss2_charge);
			this.flowLayoutPanel4.Dock = System.Windows.Forms.DockStyle.Fill;
			this.flowLayoutPanel4.Location = new System.Drawing.Point(140, 384);
			this.flowLayoutPanel4.Margin = new System.Windows.Forms.Padding(0);
			this.flowLayoutPanel4.Name = "flowLayoutPanel4";
			this.flowLayoutPanel4.Size = new System.Drawing.Size(485, 32);
			this.flowLayoutPanel4.TabIndex = 24;
			// 
			// ss2_desc
			// 
			this.ss2_desc.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right)));
			this.ss2_desc.Location = new System.Drawing.Point(3, 3);
			this.ss2_desc.Name = "ss2_desc";
			this.ss2_desc.Size = new System.Drawing.Size(345, 25);
			this.ss2_desc.TabIndex = 0;
			// 
			// ss2_turn
			// 
			this.ss2_turn.Location = new System.Drawing.Point(354, 3);
			this.ss2_turn.Maximum = new decimal(new int[] {
            99,
            0,
            0,
            0});
			this.ss2_turn.Name = "ss2_turn";
			this.ss2_turn.Size = new System.Drawing.Size(58, 25);
			this.ss2_turn.TabIndex = 1;
			this.ss2_turn.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
			// 
			// ss2_charge
			// 
			this.ss2_charge.Location = new System.Drawing.Point(418, 3);
			this.ss2_charge.Maximum = new decimal(new int[] {
            99,
            0,
            0,
            0});
			this.ss2_charge.Name = "ss2_charge";
			this.ss2_charge.Size = new System.Drawing.Size(58, 25);
			this.ss2_charge.TabIndex = 3;
			this.ss2_charge.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
			// 
			// label3
			// 
			this.label3.AutoSize = true;
			this.label3.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label3.Location = new System.Drawing.Point(3, 124);
			this.label3.Name = "label3";
			this.label3.Size = new System.Drawing.Size(134, 36);
			this.label3.TabIndex = 4;
			this.label3.Text = "潜在能力:";
			this.label3.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// ss2_proc
			// 
			this.ss2_proc.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right)));
			this.ss2_proc.Location = new System.Drawing.Point(143, 419);
			this.ss2_proc.Name = "ss2_proc";
			this.ss2_proc.Size = new System.Drawing.Size(479, 25);
			this.ss2_proc.TabIndex = 25;
			// 
			// ss1_proc
			// 
			this.ss1_proc.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right)));
			this.ss1_proc.Location = new System.Drawing.Point(143, 355);
			this.ss1_proc.Name = "ss1_proc";
			this.ss1_proc.Size = new System.Drawing.Size(479, 25);
			this.ss1_proc.TabIndex = 23;
			// 
			// as2_proc
			// 
			this.as2_proc.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right)));
			this.as2_proc.Location = new System.Drawing.Point(143, 291);
			this.as2_proc.Name = "as2_proc";
			this.as2_proc.Size = new System.Drawing.Size(479, 25);
			this.as2_proc.TabIndex = 21;
			// 
			// as2_desc
			// 
			this.as2_desc.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right)));
			this.as2_desc.Location = new System.Drawing.Point(143, 259);
			this.as2_desc.Name = "as2_desc";
			this.as2_desc.Size = new System.Drawing.Size(479, 25);
			this.as2_desc.TabIndex = 20;
			// 
			// as1_proc
			// 
			this.as1_proc.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right)));
			this.as1_proc.Location = new System.Drawing.Point(143, 227);
			this.as1_proc.Name = "as1_proc";
			this.as1_proc.Size = new System.Drawing.Size(479, 25);
			this.as1_proc.TabIndex = 19;
			// 
			// as1_desc
			// 
			this.as1_desc.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right)));
			this.as1_desc.Location = new System.Drawing.Point(143, 195);
			this.as1_desc.Name = "as1_desc";
			this.as1_desc.Size = new System.Drawing.Size(479, 25);
			this.as1_desc.TabIndex = 18;
			// 
			// label12
			// 
			this.label12.AutoSize = true;
			this.label12.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label12.Location = new System.Drawing.Point(3, 416);
			this.label12.Name = "label12";
			this.label12.Size = new System.Drawing.Size(134, 32);
			this.label12.TabIndex = 12;
			this.label12.Text = "SS2実装:";
			this.label12.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// label11
			// 
			this.label11.AutoSize = true;
			this.label11.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label11.Location = new System.Drawing.Point(3, 384);
			this.label11.Name = "label11";
			this.label11.Size = new System.Drawing.Size(134, 32);
			this.label11.TabIndex = 11;
			this.label11.Text = "SS2説明/周期/溜めT:";
			this.label11.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// label10
			// 
			this.label10.AutoSize = true;
			this.label10.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label10.Location = new System.Drawing.Point(3, 352);
			this.label10.Name = "label10";
			this.label10.Size = new System.Drawing.Size(134, 32);
			this.label10.TabIndex = 10;
			this.label10.Text = "SS1実装:";
			this.label10.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// label9
			// 
			this.label9.AutoSize = true;
			this.label9.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label9.Location = new System.Drawing.Point(3, 320);
			this.label9.Name = "label9";
			this.label9.Size = new System.Drawing.Size(134, 32);
			this.label9.TabIndex = 9;
			this.label9.Text = "SS1説明/周期/溜めT:";
			this.label9.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// label8
			// 
			this.label8.AutoSize = true;
			this.label8.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label8.Location = new System.Drawing.Point(3, 288);
			this.label8.Name = "label8";
			this.label8.Size = new System.Drawing.Size(134, 32);
			this.label8.TabIndex = 8;
			this.label8.Text = "AS2実装:";
			this.label8.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// label7
			// 
			this.label7.AutoSize = true;
			this.label7.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label7.Location = new System.Drawing.Point(3, 256);
			this.label7.Name = "label7";
			this.label7.Size = new System.Drawing.Size(134, 32);
			this.label7.TabIndex = 7;
			this.label7.Text = "AS2説明:";
			this.label7.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// label6
			// 
			this.label6.AutoSize = true;
			this.label6.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label6.Location = new System.Drawing.Point(3, 224);
			this.label6.Name = "label6";
			this.label6.Size = new System.Drawing.Size(134, 32);
			this.label6.TabIndex = 6;
			this.label6.Text = "AS1実装:";
			this.label6.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// label5
			// 
			this.label5.AutoSize = true;
			this.label5.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label5.Location = new System.Drawing.Point(3, 192);
			this.label5.Name = "label5";
			this.label5.Size = new System.Drawing.Size(134, 32);
			this.label5.TabIndex = 5;
			this.label5.Text = "AS1説明:";
			this.label5.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// label4
			// 
			this.label4.AutoSize = true;
			this.label4.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label4.Location = new System.Drawing.Point(3, 91);
			this.label4.Name = "label4";
			this.label4.Size = new System.Drawing.Size(134, 33);
			this.label4.TabIndex = 3;
			this.label4.Text = "属性/種族:";
			this.label4.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// label2
			// 
			this.label2.AutoSize = true;
			this.label2.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label2.Location = new System.Drawing.Point(3, 30);
			this.label2.Name = "label2";
			this.label2.Size = new System.Drawing.Size(134, 31);
			this.label2.TabIndex = 1;
			this.label2.Text = "図鑑/画像No/謎文字:";
			this.label2.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// label1
			// 
			this.label1.AutoSize = true;
			this.label1.Dock = System.Windows.Forms.DockStyle.Fill;
			this.label1.Location = new System.Drawing.Point(3, 0);
			this.label1.Name = "label1";
			this.label1.Size = new System.Drawing.Size(134, 30);
			this.label1.TabIndex = 0;
			this.label1.Text = "名前:";
			this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
			// 
			// t_name
			// 
			this.t_name.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right)));
			this.t_name.Location = new System.Drawing.Point(143, 3);
			this.t_name.Name = "t_name";
			this.t_name.Size = new System.Drawing.Size(479, 25);
			this.t_name.TabIndex = 13;
			// 
			// generatejs
			// 
			this.generatejs.Dock = System.Windows.Forms.DockStyle.Fill;
			this.generatejs.Location = new System.Drawing.Point(143, 451);
			this.generatejs.Name = "generatejs";
			this.generatejs.Size = new System.Drawing.Size(479, 35);
			this.generatejs.TabIndex = 26;
			this.generatejs.Text = "&Generate File";
			this.generatejs.UseVisualStyleBackColor = true;
			this.generatejs.Click += new System.EventHandler(this.generatejs_Click);
			// 
			// flowLayoutPanel1
			// 
			this.flowLayoutPanel1.Controls.Add(this.cardno);
			this.flowLayoutPanel1.Controls.Add(this.imageno);
			this.flowLayoutPanel1.Controls.Add(this.imageno_prefix);
			this.flowLayoutPanel1.Controls.Add(this.detailshow);
			this.flowLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
			this.flowLayoutPanel1.Location = new System.Drawing.Point(140, 30);
			this.flowLayoutPanel1.Margin = new System.Windows.Forms.Padding(0);
			this.flowLayoutPanel1.Name = "flowLayoutPanel1";
			this.flowLayoutPanel1.Size = new System.Drawing.Size(485, 31);
			this.flowLayoutPanel1.TabIndex = 14;
			// 
			// cardno
			// 
			this.cardno.Location = new System.Drawing.Point(3, 3);
			this.cardno.Maximum = new decimal(new int[] {
            99999,
            0,
            0,
            0});
			this.cardno.Minimum = new decimal(new int[] {
            1,
            0,
            0,
            -2147483648});
			this.cardno.Name = "cardno";
			this.cardno.Size = new System.Drawing.Size(150, 25);
			this.cardno.TabIndex = 0;
			this.cardno.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
			this.cardno.Value = new decimal(new int[] {
            1,
            0,
            0,
            -2147483648});
			// 
			// imageno
			// 
			this.imageno.Location = new System.Drawing.Point(159, 3);
			this.imageno.Maximum = new decimal(new int[] {
            99999,
            0,
            0,
            0});
			this.imageno.Minimum = new decimal(new int[] {
            1,
            0,
            0,
            -2147483648});
			this.imageno.Name = "imageno";
			this.imageno.Size = new System.Drawing.Size(151, 25);
			this.imageno.TabIndex = 1;
			this.imageno.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
			this.imageno.Value = new decimal(new int[] {
            1,
            0,
            0,
            -2147483648});
			// 
			// imageno_prefix
			// 
			this.imageno_prefix.Location = new System.Drawing.Point(316, 3);
			this.imageno_prefix.Name = "imageno_prefix";
			this.imageno_prefix.Size = new System.Drawing.Size(112, 25);
			this.imageno_prefix.TabIndex = 3;
			this.imageno_prefix.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
			// 
			// detailshow
			// 
			this.detailshow.Location = new System.Drawing.Point(434, 3);
			this.detailshow.Name = "detailshow";
			this.detailshow.Size = new System.Drawing.Size(48, 25);
			this.detailshow.TabIndex = 2;
			this.detailshow.Text = "...";
			this.detailshow.UseVisualStyleBackColor = true;
			this.detailshow.Click += new System.EventHandler(this.detailshow_Click);
			// 
			// flowLayoutPanel2
			// 
			this.flowLayoutPanel2.Controls.Add(this.attr_1);
			this.flowLayoutPanel2.Controls.Add(this.attr_2);
			this.flowLayoutPanel2.Controls.Add(this.species);
			this.flowLayoutPanel2.Dock = System.Windows.Forms.DockStyle.Fill;
			this.flowLayoutPanel2.Location = new System.Drawing.Point(140, 91);
			this.flowLayoutPanel2.Margin = new System.Windows.Forms.Padding(0);
			this.flowLayoutPanel2.Name = "flowLayoutPanel2";
			this.flowLayoutPanel2.Size = new System.Drawing.Size(485, 33);
			this.flowLayoutPanel2.TabIndex = 16;
			// 
			// attr_1
			// 
			this.attr_1.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
			this.attr_1.FormattingEnabled = true;
			this.attr_1.Items.AddRange(new object[] {
            "(未選択)",
            "火",
            "水",
            "雷",
            "光",
            "闇"});
			this.attr_1.Location = new System.Drawing.Point(3, 3);
			this.attr_1.Name = "attr_1";
			this.attr_1.Size = new System.Drawing.Size(91, 26);
			this.attr_1.TabIndex = 0;
			// 
			// attr_2
			// 
			this.attr_2.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
			this.attr_2.FormattingEnabled = true;
			this.attr_2.Items.AddRange(new object[] {
            "(未選択)",
            "火",
            "水",
            "雷",
            "光",
            "闇"});
			this.attr_2.Location = new System.Drawing.Point(100, 3);
			this.attr_2.Name = "attr_2";
			this.attr_2.Size = new System.Drawing.Size(91, 26);
			this.attr_2.TabIndex = 0;
			// 
			// species
			// 
			this.species.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
			this.species.FormattingEnabled = true;
			this.species.Items.AddRange(new object[] {
            "龍族",
            "神族",
            "魔族",
            "天使",
            "妖精",
            "亜人",
            "物質",
            "魔法生物",
            "戦士",
            "術士",
            "アイテム",
            "AbCd"});
			this.species.Location = new System.Drawing.Point(197, 3);
			this.species.Name = "species";
			this.species.Size = new System.Drawing.Size(285, 26);
			this.species.TabIndex = 1;
			// 
			// flowLayoutPanel3
			// 
			this.flowLayoutPanel3.Controls.Add(this.ss1_desc);
			this.flowLayoutPanel3.Controls.Add(this.ss1_turn);
			this.flowLayoutPanel3.Controls.Add(this.ss1_charge);
			this.flowLayoutPanel3.Dock = System.Windows.Forms.DockStyle.Fill;
			this.flowLayoutPanel3.Location = new System.Drawing.Point(140, 320);
			this.flowLayoutPanel3.Margin = new System.Windows.Forms.Padding(0);
			this.flowLayoutPanel3.Name = "flowLayoutPanel3";
			this.flowLayoutPanel3.Size = new System.Drawing.Size(485, 32);
			this.flowLayoutPanel3.TabIndex = 22;
			// 
			// ss1_desc
			// 
			this.ss1_desc.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right)));
			this.ss1_desc.Location = new System.Drawing.Point(3, 3);
			this.ss1_desc.Name = "ss1_desc";
			this.ss1_desc.Size = new System.Drawing.Size(345, 25);
			this.ss1_desc.TabIndex = 0;
			// 
			// ss1_turn
			// 
			this.ss1_turn.Location = new System.Drawing.Point(354, 3);
			this.ss1_turn.Maximum = new decimal(new int[] {
            99,
            0,
            0,
            0});
			this.ss1_turn.Name = "ss1_turn";
			this.ss1_turn.Size = new System.Drawing.Size(58, 25);
			this.ss1_turn.TabIndex = 1;
			this.ss1_turn.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
			// 
			// ss1_charge
			// 
			this.ss1_charge.Location = new System.Drawing.Point(418, 3);
			this.ss1_charge.Maximum = new decimal(new int[] {
            99,
            0,
            0,
            0});
			this.ss1_charge.Name = "ss1_charge";
			this.ss1_charge.Size = new System.Drawing.Size(58, 25);
			this.ss1_charge.TabIndex = 2;
			this.ss1_charge.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
			// 
			// flowLayoutPanel6
			// 
			this.flowLayoutPanel6.Controls.Add(this.awake_edit);
			this.flowLayoutPanel6.Controls.Add(this.Lawake_edit);
			this.flowLayoutPanel6.Dock = System.Windows.Forms.DockStyle.Fill;
			this.flowLayoutPanel6.Location = new System.Drawing.Point(140, 124);
			this.flowLayoutPanel6.Margin = new System.Windows.Forms.Padding(0);
			this.flowLayoutPanel6.Name = "flowLayoutPanel6";
			this.flowLayoutPanel6.Size = new System.Drawing.Size(485, 36);
			this.flowLayoutPanel6.TabIndex = 17;
			// 
			// awake_edit
			// 
			this.awake_edit.Location = new System.Drawing.Point(3, 0);
			this.awake_edit.Margin = new System.Windows.Forms.Padding(3, 0, 3, 0);
			this.awake_edit.Name = "awake_edit";
			this.awake_edit.Size = new System.Drawing.Size(235, 32);
			this.awake_edit.TabIndex = 0;
			this.awake_edit.Text = "潜在能力編集";
			this.awake_edit.UseVisualStyleBackColor = true;
			this.awake_edit.Click += new System.EventHandler(this.awake_edit_Click);
			// 
			// Lawake_edit
			// 
			this.Lawake_edit.Location = new System.Drawing.Point(244, 0);
			this.Lawake_edit.Margin = new System.Windows.Forms.Padding(3, 0, 3, 0);
			this.Lawake_edit.Name = "Lawake_edit";
			this.Lawake_edit.Size = new System.Drawing.Size(238, 32);
			this.Lawake_edit.TabIndex = 1;
			this.Lawake_edit.Text = "L潜在能力編集";
			this.Lawake_edit.UseVisualStyleBackColor = true;
			this.Lawake_edit.Click += new System.EventHandler(this.Lawake_edit_Click);
			// 
			// reset
			// 
			this.reset.Dock = System.Windows.Forms.DockStyle.Fill;
			this.reset.Location = new System.Drawing.Point(3, 451);
			this.reset.Name = "reset";
			this.reset.Size = new System.Drawing.Size(134, 35);
			this.reset.TabIndex = 27;
			this.reset.Text = "Reset";
			this.reset.UseVisualStyleBackColor = true;
			this.reset.Click += new System.EventHandler(this.reset_Click);
			// 
			// flowLayoutPanel7
			// 
			this.flowLayoutPanel7.Controls.Add(this.textBox1);
			this.flowLayoutPanel7.Controls.Add(this.checkBox1);
			this.flowLayoutPanel7.Dock = System.Windows.Forms.DockStyle.Fill;
			this.flowLayoutPanel7.Location = new System.Drawing.Point(140, 160);
			this.flowLayoutPanel7.Margin = new System.Windows.Forms.Padding(0);
			this.flowLayoutPanel7.Name = "flowLayoutPanel7";
			this.flowLayoutPanel7.Size = new System.Drawing.Size(485, 32);
			this.flowLayoutPanel7.TabIndex = 29;
			// 
			// textBox1
			// 
			this.textBox1.Anchor = System.Windows.Forms.AnchorStyles.Left;
			this.textBox1.Location = new System.Drawing.Point(3, 3);
			this.textBox1.Name = "textBox1";
			this.textBox1.Size = new System.Drawing.Size(391, 25);
			this.textBox1.TabIndex = 30;
			// 
			// checkBox1
			// 
			this.checkBox1.AutoSize = true;
			this.checkBox1.Location = new System.Drawing.Point(400, 3);
			this.checkBox1.Name = "checkBox1";
			this.checkBox1.Size = new System.Drawing.Size(75, 22);
			this.checkBox1.TabIndex = 31;
			this.checkBox1.Text = "配布精霊";
			this.checkBox1.UseVisualStyleBackColor = true;
			// 
			// jsexport
			// 
			this.jsexport.Dock = System.Windows.Forms.DockStyle.Fill;
			this.jsexport.Location = new System.Drawing.Point(0, 0);
			this.jsexport.Multiline = true;
			this.jsexport.Name = "jsexport";
			this.jsexport.ReadOnly = true;
			this.jsexport.ScrollBars = System.Windows.Forms.ScrollBars.Both;
			this.jsexport.Size = new System.Drawing.Size(283, 489);
			this.jsexport.TabIndex = 0;
			this.jsexport.WordWrap = false;
			// 
			// Editor
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 18F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.ClientSize = new System.Drawing.Size(912, 489);
			this.Controls.Add(this.splitContainer1);
			this.Font = new System.Drawing.Font("メイリオ", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(128)));
			this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
			this.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
			this.MaximizeBox = false;
			this.Name = "Editor";
			this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
			this.Text = "wiz_simu: card editor";
			this.TopMost = true;
			this.Load += new System.EventHandler(this.Editor_Load);
			this.splitContainer1.Panel1.ResumeLayout(false);
			this.splitContainer1.Panel2.ResumeLayout(false);
			this.splitContainer1.Panel2.PerformLayout();
			((System.ComponentModel.ISupportInitialize)(this.splitContainer1)).EndInit();
			this.splitContainer1.ResumeLayout(false);
			this.tableLayoutPanel1.ResumeLayout(false);
			this.tableLayoutPanel1.PerformLayout();
			this.flowLayoutPanel5.ResumeLayout(false);
			((System.ComponentModel.ISupportInitialize)(this.hp)).EndInit();
			((System.ComponentModel.ISupportInitialize)(this.atk)).EndInit();
			((System.ComponentModel.ISupportInitialize)(this.cost)).EndInit();
			this.flowLayoutPanel4.ResumeLayout(false);
			this.flowLayoutPanel4.PerformLayout();
			((System.ComponentModel.ISupportInitialize)(this.ss2_turn)).EndInit();
			((System.ComponentModel.ISupportInitialize)(this.ss2_charge)).EndInit();
			this.flowLayoutPanel1.ResumeLayout(false);
			this.flowLayoutPanel1.PerformLayout();
			((System.ComponentModel.ISupportInitialize)(this.cardno)).EndInit();
			((System.ComponentModel.ISupportInitialize)(this.imageno)).EndInit();
			this.flowLayoutPanel2.ResumeLayout(false);
			this.flowLayoutPanel3.ResumeLayout(false);
			this.flowLayoutPanel3.PerformLayout();
			((System.ComponentModel.ISupportInitialize)(this.ss1_turn)).EndInit();
			((System.ComponentModel.ISupportInitialize)(this.ss1_charge)).EndInit();
			this.flowLayoutPanel6.ResumeLayout(false);
			this.flowLayoutPanel7.ResumeLayout(false);
			this.flowLayoutPanel7.PerformLayout();
			this.ResumeLayout(false);

		}

		#endregion

		private System.Windows.Forms.SplitContainer splitContainer1;
		private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
		private System.Windows.Forms.TextBox ss2_proc;
		private System.Windows.Forms.TextBox ss1_proc;
		private System.Windows.Forms.TextBox as2_proc;
		private System.Windows.Forms.TextBox as2_desc;
		private System.Windows.Forms.TextBox as1_proc;
		private System.Windows.Forms.TextBox as1_desc;
		private System.Windows.Forms.Label label12;
		private System.Windows.Forms.Label label11;
		private System.Windows.Forms.Label label10;
		private System.Windows.Forms.Label label9;
		private System.Windows.Forms.Label label8;
		private System.Windows.Forms.Label label7;
		private System.Windows.Forms.Label label6;
		private System.Windows.Forms.Label label5;
		private System.Windows.Forms.Label label4;
		private System.Windows.Forms.Label label2;
		private System.Windows.Forms.Label label1;
		private System.Windows.Forms.TextBox t_name;
		private System.Windows.Forms.Button generatejs;
		private System.Windows.Forms.TextBox jsexport;
		private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel1;
		private System.Windows.Forms.NumericUpDown cardno;
		private System.Windows.Forms.NumericUpDown imageno;
		private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel2;
		private System.Windows.Forms.ComboBox attr_1;
		private System.Windows.Forms.ComboBox attr_2;
		private System.Windows.Forms.ComboBox species;
		private System.Windows.Forms.Label label3;
		private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel4;
		private System.Windows.Forms.TextBox ss2_desc;
		private System.Windows.Forms.NumericUpDown ss2_turn;
		private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel3;
		private System.Windows.Forms.TextBox ss1_desc;
		private System.Windows.Forms.NumericUpDown ss1_turn;
		private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel5;
		private System.Windows.Forms.NumericUpDown hp;
		private System.Windows.Forms.NumericUpDown atk;
		private System.Windows.Forms.NumericUpDown cost;
		private System.Windows.Forms.Label label13;
		private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel6;
		private System.Windows.Forms.Button awake_edit;
		private System.Windows.Forms.Button Lawake_edit;
		private System.Windows.Forms.Button reset;
		private System.Windows.Forms.Label label14;
		private System.Windows.Forms.Button detailshow;
		private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel7;
		private System.Windows.Forms.TextBox textBox1;
		private System.Windows.Forms.CheckBox checkBox1;
		private System.Windows.Forms.NumericUpDown ss2_charge;
		private System.Windows.Forms.TextBox imageno_prefix;
		private System.Windows.Forms.NumericUpDown ss1_charge;
	}
}

