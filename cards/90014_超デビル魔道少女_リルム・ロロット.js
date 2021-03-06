{
	name: "超デビル魔道少女 リルム・ロロット",
	cardno: 90014,
	imageno: 6575,
	hp: 2221,
	atk: 4466,
	cost: 46,
	attr: [0, -1],
	species: [9],
	islegend: true,
	as1: {
		desc: "<属性特効>3チェインかつHP80％以上で雷属性の敵単体へ特効ダメージ(675%)",
		proc: add_cond(ChainAttrAttack(6.75, 3, [0, 0, 1, 0, 0]), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<大魔術>敵全体へ火属性のダメージ(180%)、さらに味方全体のHPを回復する(20%)",
		turn: 6,
		proc: [ss_damage_all(1.8, [0]), ss_heal(0.20)],
	},
	awakes: [
		Heal_afterbattle(10),
		Attr_relief([1, 0, 1, 0, 0, ], 10),
		Fastskill(1),
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		Panel_boost([1, 0, 0, 0, 0, ], 1),
		Fastskill(1),
		Spec_statusup(0, 200, [9, ]),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Fastskill(1),
		Spec_statusup(0, 200, [9, ]),
	],
	as2: {
		desc: "<属性特効>3チェインかつHP80％以上で雷属性の敵単体へ特効ダメージ(775%)",
		proc: add_cond(ChainAttrAttack(7.75, 3, [0, 0, 1, 0, 0]), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<大魔術>敵全体へ火属性のダメージ(200%)、さらに味方全体のHPを回復する(25%)",
		turn: 9,
		proc: [ss_damage_all(2.0, [0]), ss_heal(0.25)],
	},
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
	],
}