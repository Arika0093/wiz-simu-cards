{
	name: "光の聖女 サーシャ・スターライト",
	cardno: 3627,
	imageno: 5206,
	hp: 2368,
	atk: 2356,
	cost: 35,
	attr: [1, -1],
	species: [9],
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(200, 0),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(200, 0, [9, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージ絶大アップ/250％",
		proc: ChainAttack(2.5, 3),
	},
	ss1: {
		desc: "<大魔術>敵全体へ水属性の究極ダメージ(180％)",
		turn: 8,
		proc: [ss_damage_all(1.8, [1])],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージ極大アップ/350%",
		proc: ChainAttack(3.5, 3),
	},
	ss2: {
		desc: "<大魔術>敵全体へ水属性の超究極ダメージ(260％)",
		turn: 12,
		proc: [ss_damage_all(2.6, [1])],
	},
}