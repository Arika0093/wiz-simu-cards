{
	name: "聖皇の預言者 シャイア・フラクタル",
	cardno: 3976,
	imageno: 5638,
	hp: 2902,
	atk: 2448,
	cost: 49,
	attr: [1, -1],
	species: [9],
	disable: true,
	ape: "魔道杯(その他)",
	awakes: [
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(200, 0),
		Fastskill(1),
		Spec_statusup(200, 0, [9, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Heal_afterbattle(10),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<回復>水属性の味方を回復、7チェインで更に回復(通常：10％ / 7チェイン：17％)",
		proc: [Heal(0.10, [0,1,0,0,0], 0), Heal(0.17, [0,1,0,0,0], 7)],
	},
	ss1: {
		desc: "<状態異常回復>味方全体のHPを回復し、状態異常を回復する(回復：50％)",
		turn: 7,
		proc: [ss_heal(0.50), ss_abstate_cure()],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<回復>水属性の味方を回復、7チェインで更に回復(通常：13％ / 7チェイン：20％)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), Heal(0.20, [0,1,0,0,0], 7)],
	},
	ss2: {
		desc: "<状態異常回復&蘇生>味方全体のHPを回復し、状態異常を回復、さらに水属性の味方を50％で蘇生(回復：50％)",
		turn: 10,
		proc: [ss_heal(0.50), ss_abstate_cure(), ss_resurrection([0,1,0,0,0], 0.5)],
	},
}