{
	name: "必勝の煌槍 ラキア・クレメンテ",
	cardno: 6143,
	imageno: 7963,
	hp: 2010,
	atk: 2125,
	cost: 22,
	attr: [2, 1],
	species: [8],
	islegend: false,
	ape: "大魔道杯 in 覇眼戦線",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ、HP50％以上でさらにアップ(300%/350％)",
		proc: [ChainAttack(3.0, 3), add_cond(ChainAttack(3.5, 3), when_hp_more(0.5))],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水・雷属性のダメージ(180％)",
		turn: 9,
		proc: [ss_damage_all(1.8, [1, 2]), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(0, 100),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_relief([1, 1, 1, 1, 1, ], 10),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
		Fastskill(2),
		Heal_afterbattle(10),
	],
}