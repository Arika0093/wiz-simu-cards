{
	name: "麗彩森の春華 ミーナリア・ファリィ",
	cardno: 9494,
	imageno: 7835,
	hp: 2524,
	atk: 7204,
	cost: 50,
	attr: [1,-1],
	species: [9],
	islegend: true,
	ape: "DL限定精霊",
	as1: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(350%)、8チェインで更に特効ダメージ(450%)",
		proc: [ChainAttrAttack(3.5, 0, [1, 0, 0, 0, 0]), ChainAttrAttack(8.0, 8, [1, 0, 0, 0, 0])],
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ水属性のダメージ(400%)、さらに火属性の敵には特効ダメージ(550%)",
		turn: 3,
		proc: [ss_damage_all(special_attr([1, 0, 0, 0, 0], 9.5, 4.0), [1])],
	},
	awakes: [
		Costdown(20),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(4),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Attr_relief([0,0,1,0,0,],20),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(450%)、8チェインで更に特効ダメージ(450%)",
		proc: [ChainAttrAttack(4.5, 0, [1, 0, 0, 0, 0]), ChainAttrAttack(9.0, 8, [1, 0, 0, 0, 0])],
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ水属性のダメージ(400%)、さらに火属性の敵には特効ダメージ(1050%)",
		turn: 5,
		proc: [ss_damage_all(special_attr([1, 0, 0, 0, 0], 14.5, 4.0), [1])],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Statusup(0,1000),
	],
}