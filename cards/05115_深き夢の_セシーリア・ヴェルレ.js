{
	name: "深き夢の セシーリア・ヴェルレ",
	cardno: 5115,
	imageno: 6859,
	hp: 2954,
	atk: 2434,
	cost: 38,
	attr: [2, -1],
	species: [9],
	awakes: [
		Statusup(0, 200),
		Statusup(100, 0),
		Statusup(200, 0),
		Attr_relief([0, 1, 0, 0, 0, ], 10),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Fastskill(1),
		Spec_statusup(0, 100, [9, ]),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
	],
	as1: {
		desc: "<回復>雷属性の味方のHPを回復/13％",
		proc: Heal(0.13, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<蘇生>味方全体のHPを回復し、さらに雷属性の味方を30％で蘇生(回復：30％)",
		turn: 8,
		proc: [ss_heal(0.30), ss_resurrection([0,0,1,0,0], 0.30)],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<回復>雷属性の味方のHPを回復/15％",
		proc: Heal(0.15, [0,0,1,0,0], 0),
	},
	ss2: {
		desc: "<蘇生>味方全体のHPを回復し、さらに雷属性の味方を50％で蘇生(回復：50％)",
		turn: 10,
		proc: [ss_heal(0.50), ss_resurrection([0,0,1,0,0], 0.50)],
	},
}