using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ws_cardeditor
{
	public class wcard
	{
		public string name;
		public int cardno;
		public int imageno;
		public string imageno_prefix = "";
		public int hp;
		public int atk;
		public int cost;
		public int[] attr = new int[2];
		public int species;
		public string[] awakes;
		public string[] Lawake;
		public bool islegend;
		public string ape;
		public bool is_dist;
		public string as1_desc;
		public string as1_proc;
		public string as2_desc;
		public string as2_proc;
		public string ss1_desc;
		public int ss1_turn;
		public int ss1_charge;
		public string ss1_proc;
		public string ss2_desc;
		public int ss2_turn;
		public int ss2_charge;
		public string ss2_proc;

		public wcard()
		{
			awakes = new string[0];
			Lawake = new string[0];
		}
		
		// to string
		public string toString()
		{
			var rst = "{\r\n\t" +
				"name: \"" + name + "\",\r\n\t" +
				"cardno: " + cardno + ",\r\n\t" +
				"imageno: " + imageno + ",\r\n\t" +
				(imageno_prefix.Length > 0 ? "imageno_prefix: " + imageno_prefix : "") + 
				"hp: " + hp + ",\r\n\t" +
				"atk: " + atk + ",\r\n\t" +
				"cost: " + cost + ",\r\n\t" +
				"attr: [" + attr[0] + "," + attr[1] + "],\r\n\t" +
				"species: [" + species + "],\r\n\t" +
				"islegend: " + islegend.ToString().ToLower() + ",\r\n\t" +
				(ape.Length > 0 ? "ape: \"" + ape + "\",\r\n\t" : "") +
				(is_dist ? "is_dist: " + is_dist.ToString().ToLower() + ",\r\n\t" : "") +
				"as1: {" + "\r\n\t\t" +
					"desc: \"" + as1_desc + "\",\r\n\t\t" +
					"proc: " + (as1_proc != "" ? as1_proc : "null") + ",\r\n\t" +
				"},\r\n\t" +
				"ss1: {" + "\r\n\t\t" +
					"desc: \"" + ss1_desc + "\",\r\n\t\t" +
					"turn: " + ss1_turn + ",\r\n\t\t" +
					(ss1_charge > 0 ? "charged: " + ss1_charge + ",\r\n\t\t" : "") +
					"proc: " + (ss1_proc != "" ? ss1_proc : "null") + ",\r\n\t" +
				"}" + ",\r\n\tawakes: [\r\n\t";
			foreach(var a in awakes) {
				rst += "\t" + a + ",\r\n\t";
			}
			rst += "],\r\n";
			if(islegend) {
				rst += "\tas2: {" + "\r\n\t\t" +
					"desc: \"" + as2_desc + "\",\r\n\t\t" +
					"proc: " + (as2_proc != "" ? as2_proc : "null") + ",\r\n\t" +
				"},\r\n\t" +
				"ss2: {" + "\r\n\t\t" +
					"desc: \"" + ss2_desc + "\",\r\n\t\t" +
					"turn: " + ss2_turn + ",\r\n\t\t" +
					(ss2_charge > 0 ? "charged: " + ss2_charge + ",\r\n\t\t" : "") +
					"proc: " + (ss2_proc != "" ? ss2_proc : "null") + ",\r\n\t" +
				"}" + ",\r\n\tLawake: [\r\n\t";
				foreach(var b in Lawake) {
					rst += "\t" + b + ",\r\n\t";
				}
				rst += "],\r\n";
			}
			rst += "},";
			return rst;
		}
	}
}
