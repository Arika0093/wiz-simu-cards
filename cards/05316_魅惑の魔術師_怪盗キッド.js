{
	name: "魅惑の魔術師 怪盗キッド",
	cardno: 5316,
	imageno: 7007,
	hp: 2221,
	atk: 2324,
	cost: 33,
	attr: [1, 4],
	species: [9],
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<攻撃強化>残りHPが80%以上で水属性の味方の攻撃力をアップ(50%)",
		proc: add_cond(ChainEnhance(0.50, [0, 1, 0, 0, 0], 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<カウンター>3ターンの間、スキルカウンター待機",
		turn: 8,
		proc: [ss_skillcounter(1.0, 3)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(200, 0),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		NEFTJOD(30),
		Statusup(0, 200),
		Spec_statusup(0, 200, [9, ]),
		Fastskill(2),
	],
	as2: {
		desc: "<攻撃強化>残りHPが80%以上で水属性の味方の攻撃力をアップ(70%)",
		proc: add_cond(ChainEnhance(0.70, [0, 1, 0, 0, 0], 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<カウンター>5ターンの間、スキルカウンター待機",
		turn: 11,
		proc: [ss_skillcounter(1.0, 5)],
	},
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
}