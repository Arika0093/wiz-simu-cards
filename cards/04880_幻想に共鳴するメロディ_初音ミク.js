{
	name: "幻想に共鳴するメロディ 初音ミク",
	cardno: 4880,
	imageno: 6633,
	hp: 2754,
	atk: 2649,
	cost: 48,
	attr: [2, 0],
	species: [8],
	disable: true,
	awakes: [
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Fastskill(1),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_relief([0, 1, 0, 0, 0, ], 20),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
		Fastskill(2),
		NEFTJOD(30),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
	],
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/450％",
		proc: ChainAttack(4.5, 5),
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを500アップ(上限値：2000)",
		turn: 5,
		proc: [ss_statusup_all([500, 500], [2000, 2000], -1)],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/550％",
		proc: ChainAttack(5.5, 5),
	},
	ss2: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを1000アップ(上限値：2000)",
		turn: 8,
		proc: [ss_statusup_all([1000, 1000], [2000, 2000], -1)],
	},
}