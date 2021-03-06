{
	name: "聖夜航路の女神様 シール・サンテ",
	cardno: 9873,
	imageno: 7085,
	hp: 3212,
	atk: 5811,
	cost: 46,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "Christmas2015",
	as1: {
		desc: "<属性特効>3チェインで火属性の敵単体へ特効ダメージ(350%)、デッキに単色の精霊が多いほど、さらにダメージアップ(110%)(上限:5段階)",
		proc: add_cond(ChainAttrAttack(3.5, 3, [1,0,0,0,0]), as_singleattr_num(0, 1.1)),
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ水属性のダメージ(400%)、平均解答が早いほどさらに火属性の敵には特効ダメージ(400%)(上限:4段階)",
		turn: 4,
		proc: [ss_damage_all(special_attr([1,0,0,0,0], ss_answertime(4.0, 4.0), 4.0), [1], 1)],
	},
	awakes: [
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Fastskill(3),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Awake_noeffect("スキル反射見破り",1),
	],
	as2: {
		desc: "<属性特効>3チェインで火属性の敵単体へ特効ダメージ(450%)、デッキに単色の精霊が多いほど、さらにダメージアップ(110%)(上限:5段階)",
		proc: add_cond(ChainAttrAttack(4.5, 3, [1,0,0,0,0]), as_singleattr_num(0, 1.1)),
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ水属性のダメージ(650%)、平均解答が早いほどさらに火属性の敵には特効ダメージ(400%)(上限:4段階)",
		turn: 6,
		proc: [ss_damage_all(special_attr([1,0,0,0,0], ss_answertime(6.5, 4.0), 6.5), [1], 1)],
	},
	Lawake: [
		Statusup(0,1500),
		Statusup(500,0),
	],
}