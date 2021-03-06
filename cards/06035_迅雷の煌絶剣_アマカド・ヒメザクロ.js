{
	name: "迅雷の煌絶剣　アマカド・ヒメザクロ",
	cardno: 6035,
	imageno: 7869,
	hp: 2876,
	atk: 5432,
	cost: 50,
	attr: [2, -1],
	species: [8],
	disable: true,
	islegend: true,
	ape: "覇眼戦線Ⅰ",
	as1: {
		desc: "<種族数攻撃>戦士・亜人の仲間の数だけダメージアップ(140%/180%/220%/260%/300%)、パネルの色が2色以上でさらにダメージアップ(160%/220%/280%/340%/400%)",
		proc: [ChainDeckSpecsAttack(0.4, [5,8], 0),add_cond(ChainDeckSpecsAttack(0.6, [5,8], 0), as_panel_over2())],
	},
	ss1: {
		desc: "<回復>味方全体のHPを回復する(50%)",
		turn: 5,
		proc: [ss_heal(0.5)],
	},
	awakes: [
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		NEFTJOD(30),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_relief([0, 1, 0, 0, 0, ], 10),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as2: {
		desc: "<種族数攻撃>戦士・亜人の仲間の数だけダメージアップ(160%/220%/280%/340%/400%)、パネルの色が2色以上でさらにダメージアップ(180%/260%/340%/420%/500%)",
		proc: [ChainDeckSpecsAttack(0.6, [5,8], 0),add_cond(ChainDeckSpecsAttack(0.8, [5,8], 0), as_panel_over2())],
	},
	ss2: {
		desc: "<状態異常回復>味方全体のHPを回復し(50%)、状態異常を回復する",
		turn: 7,
		proc: [ss_heal(0.5), ss_abstate_cure()],
	},
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
}