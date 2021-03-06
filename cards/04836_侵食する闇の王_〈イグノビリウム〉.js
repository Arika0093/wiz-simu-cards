{
	name: "侵食する闇の王 〈イグノビリウム〉",
	cardno: 4836,
	imageno: 6542,
	hp: 2404,
	atk: 2214,
	cost: 48,
	attr: [1, 4],
	species: [2],
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(0, 200),
		Fastskill(1),
		NEFTJOD(30),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Spec_statusup(0, 200, [2, ]),
	],
	as1: {
		desc: "<チェイン攻撃>10チェインでダメージアップ、さらに敵のHPを吸収(攻撃：600％ / HP吸収：3％)",
		proc: add_cond(ChainAttack(6.0, 10), as_hp_absorption(0.03)),
	},
	ss1: {
		desc: "<犠牲魔術>味方全体のMAXHPの60％を使い敵単体へダメージ(240％×味方の人数)",
		turn: 12,
		proc: [ss_damage_s(ss_consume_all_cond(2.4, 0.6), [1], 1)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<チェイン攻撃>10チェインでダメージアップ、さらに敵のHPを吸収(攻撃：700％ / HP吸収：3％)",
		proc: add_cond(ChainAttack(7.0, 10), as_hp_absorption(0.03)),
	},
	ss2: {
		desc: "<犠牲魔術>味方全体のMAXHPの60％を使い敵単体へダメージ(300％×味方の人数)",
		turn: 14,
		proc: [ss_damage_s(ss_consume_all_cond(3.0, 0.6), [1], 1)],
	},
}