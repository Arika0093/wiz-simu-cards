{
	name: "黒厄の災闇王剣 オディルン・バナド",
	cardno: 4974,
	imageno: 6709,
	hp: 2109,
	atk: 2872,
	cost: 40,
	attr: [1, 4],
	species: [8],
	disable: true,
	awakes: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/320％",
		proc: ChainAttack(3.2, 3),
	},
	ss1: {
		desc: "<大魔術>5チェインを消費し、敵全体へ水属性のダメージ、チェインが満たない場合(5チェイン消費：400％ / チェインなし：200％)",
		turn: 8,
		proc: [ss_damage_all(ss_chain_cost(5, 4.0, 2.0), [1])],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/420％",
		proc: ChainAttack(4.2, 3),
	},
	ss2: {
		desc: "<大魔術>10チェインを消費し、敵全体へ水属性のダメージ、チェインが満たない場合(10チェイン消費：600％ / チェインなし：300％)",
		turn: 10,
		proc: [ss_damage_all(ss_chain_cost(10, 6.0, 3.0), [1])],
	},
}