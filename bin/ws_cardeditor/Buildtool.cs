using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Reflection;

namespace ws_cardeditor
{
	static class Buildtool
	{
		[System.Runtime.InteropServices.DllImport("kernel32.dll")] // この行を追加
		private static extern bool AllocConsole();  

		public const string OUTPUT_DIR = "../build/";
		public const string OUTPUT_NAME = "cards.js";
		public const string OUTPUT_MIN_NAME = "cards.min.js";
		public const string CARD_SEGMENT_DIR = "../cards/";

		static public void Run()
		{
			// for debug, this commentout removed
			// AllocConsole();
			Console.WriteLine("--- cards.js build -------");
			var concatFiles = "var Cards = [";
			Console.WriteLine("--- load *.js files ------");

			var assPath = new Uri(Assembly.GetExecutingAssembly().Location);
			var segmentDirPath = new Uri(assPath, CARD_SEGMENT_DIR).LocalPath;
			var files = Directory.GetFiles(segmentDirPath, "*.js", SearchOption.TopDirectoryOnly);
			var count = 0;
			foreach(var f in files) {
				var sr = new StreamReader(f);
				var readString = sr.ReadToEnd();
				// comment remove
				readString = Regex.Replace(readString, @"//.*\n", "");
				concatFiles += (count > 0 ? "," : "") + readString;
				sr.Close();
				count++;
			}
			concatFiles += "];";
			Console.WriteLine("--- trim cards.js file ---");
			// trim
			var concatTrimFiles = concatFiles;
			concatTrimFiles = Regex.Replace(concatTrimFiles, @"[\n\r\t]", "");
			concatTrimFiles = Regex.Replace(concatTrimFiles, @"([:,])\s*", "$1");
			// save
			Console.WriteLine("--- save cards.js file ---");
			var savePath = new Uri(assPath, OUTPUT_DIR + OUTPUT_NAME).LocalPath;
			var saveMinPath = new Uri(assPath, OUTPUT_DIR + OUTPUT_MIN_NAME).LocalPath;
			var sw1 = new StreamWriter(savePath);
			sw1.Write(concatFiles);
			sw1.Close();
			Console.WriteLine("--- save cards.min.js file");
			var sw2 = new StreamWriter(saveMinPath);
			sw2.Write(concatTrimFiles);
			sw2.Close();
			Console.WriteLine("--- finished. ------------");
		}
	}
}
