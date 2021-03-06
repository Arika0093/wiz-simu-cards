{
	name: "人語を理解する審判獣 アバルドロス",
	cardno: 10689,
	imageno: 13133,
	imageno_prefix: "u8DCdL_",
	hp: 3011,
	atk: 5552,
	cost: 43,
	attr: [1,-1],
	species: [1],
	islegend: true,
	ape: "Birth of New Order 2",
	is_dist: true,
	as1: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(300%)、デッキに単色の精霊が多いほど、さらにダメージアップ(40%)(上限:5段階)",
		proc: add_cond(ChainAttrAttack(3.0, 0, [1,0,0,0,0]), as_singleattr_num(0, 0.4)),
	},
	ss1: {
		desc: "<パネル爆破大魔術>スキル反射を無視し、パネルを消費(一部の特殊なパネルを除く)し、消費したパネルの属性の数だけ敵全体へダメージ(100%)",
		turn: 6,
		proc: [ss_PanelBurningDamage_all(1.0)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Fastskill(2),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(400%)、デッキに単色の精霊が多いほど、さらにダメージアップ(40%)(上限:5段階)",
		proc: add_cond(ChainAttrAttack(4.0, 0, [1,0,0,0,0]), as_singleattr_num(0, 0.4)),
	},
	ss2: {
		desc: "<パネル爆破大魔術>スキル反射を無視し、パネルを消費(一部の特殊なパネルを除く)し、消費したパネルの属性の数だけ敵全体へダメージ(250%)",
		turn: 9,
		proc: [ss_PanelBurningDamage_all(2.5)],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,1000),
	],
}