{
	name: "機神の操者 スミオ&エクスマキナ",
	cardno: 3733,
	imageno: 5287,
	hp: 2836,
	atk: 2559,
	cost: 45,
	attr: [2, -1],
	species: [8],
	disable: true,
	awakes: [
		Fastskill(1),
		Attr_relief([0, 0, 1, 0, 0, ], 20),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_relief([1, 0, 0, 0, 0, ], 20),
		Fastskill(2),
		Spec_statusup(200, 0, [8, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<攻撃強化>7チェインで雷属性の味方の攻撃力をアップ/+80％",
		proc: ChainEnhance(0.80, [0,0,1,0,0], 7),
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを1早める",
		turn: 6,
		proc: [ss_skillboost(1)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<攻撃強化>7チェインで雷属性の味方の攻撃力をアップ/+100％",
		proc: ChainEnhance(1.0, [0,0,1,0,0], 7),
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 8,
		proc: [ss_skillboost(2)],
	},
}