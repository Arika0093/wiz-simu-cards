{
	name: "拒絶の完全世界 シェイナ・メイヴ",
	cardno: 7709,
	imageno: 5897,
	hp: 1483,
	atk: 6879,
	cost: 52,
	attr: [0, -1],
	species: [2],
	awakes: [
		Panel_boost([1,0,0,0,0], 2),
		Statusup(200, 0),
		NEFTJOD(30),
		Fastskill(1),
		Attr_statusup(0, 200, [1,0,0,0,0]),
		Statusup(0, 200),
		Attr_statusup(200, 0, [1,0,0,0,0]),
		Fastskill(2),
		Spec_statusup(400, 0, [2]),
		Spec_statusup(0, 400, [2]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインで味方のMAXHP10％を使い、ダメージアップ(750％)",
		proc: add_cond(ChainAttack(7.5, 3), as_consume_all(0.1)),
	},
	ss1: {
		desc: "<自己犠牲魔術>スキル反射を無視し、MAXHPの50％を使い敵単体へダメージ(1000％)",
		turn: 7,
		proc: [ss_damage_s(10, [0], 1), ss_consume_own(0.5), ss_ignore_skillcounter()],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(0, 500),
		NEFTJOD(30),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインで味方のMAXHP10％を使い、ダメージアップ(850％)",
		proc: add_cond(ChainAttack(8.5, 3), as_consume_all(0.1)),
	},
	ss2: {
		desc: "<自己犠牲魔術>スキル反射を無視し、MAXHPの50％を使い敵単体へダメージ(1200％)",
		turn: 9,
		proc: [ss_damage_s(12.0, [0], 1), ss_consume_own(0.5), ss_ignore_skillcounter()],
	},
}