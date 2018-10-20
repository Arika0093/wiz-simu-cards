using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

namespace ws_cardeditor
{
	static class Program
	{
		/// <summary>
		/// アプリケーションのメイン エントリ ポイントです。
		/// </summary>
		[STAThread]
		static void Main(string[] args)
		{
			// editor mode
			if(args.Length <= 0 || args[0] != "--build") {
				Application.EnableVisualStyles();
				Application.SetCompatibleTextRenderingDefault(false);
				Application.Run(new Editor());
			}
			else {
				Buildtool.Run();
			}
		}
	}
}
