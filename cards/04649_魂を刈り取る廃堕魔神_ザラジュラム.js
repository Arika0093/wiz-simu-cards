{
	name: "魂を刈り取る廃堕魔神 ザラジュラム",
	cardno: 4649,
	imageno: 6111,
	hp: 3244,
	atk: 2727,
	cost: 70,
	attr: [2, -1],
	species: [3],
	disable: true,
	awakes: [
		Costdown(4),
		Statusup(0, 200),
		Statusup(200, 0),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(200, 0),
		Statusup(0, 200),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Spec_statusup(0, 200, [3, ]),
		Spec_statusup(200, 0, [3, ]),
	],
	as1: {
		desc: "<攻撃強化>3チェインで雷属性の味方の攻撃力をアップ、10チェインでさらにアップ(通常：+40％ / 10チェイン：+90％)",
		proc: [ChainEnhance(0.40, [0,0,1,0,0], 3), ChainEnhance(0.90, [0,0,1,0,0], 10)],
	},
	ss1: {
		desc: "<自己犠牲魔術>MAXHPの50％を使い敵全体へダメージ(260％)",
		turn: 7,
		proc: [ss_damage_all(2.6, [2]), ss_consume_own(0.50)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃強化>3チェインで雷属性の味方の攻撃力をアップ、10チェインで(通常：+60％ / 10チェイン：+110％)",
		proc: [ChainEnhance(0.60, [0,0,1,0,0], 3), ChainEnhance(1.10, [0,0,1,0,0], 10)],
	},
	ss2: {
		desc: "<自己犠牲魔術>MAXHPの50％を使い敵全体へダメージ(330％)",
		turn: 9,
		proc: [ss_damage_all(3.3, [2]), ss_consume_own(0.50)],
	},
}