{
	name: "頑張ってね真さん…鈴木園子",
	cardno: 10211,
	imageno: 6983,//ss
	hp: 3899,
	atk: 4156,
	cost: 40,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(350%)",
		proc: ChainAttrAttack(3.5, 0, [1, 0, 0, 0, 0]),
	},
	ss1: {
		desc: "<遅延大魔術>敵単体の攻撃ターンを1遅らせ、水属性のダメージ(300％)",
		turn: 4,
		proc: [ss_damage_s(3.0, [1], 1), ss_delay_s(1)],
	},
	as2: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(450%)",
		proc: ChainAttrAttack(4.5, 0, [1, 0, 0, 0, 0]),
	},
	ss2: {
		desc: "<遅延大魔術>敵単体の攻撃ターンを1遅らせ、水属性のダメージ(500％)",
		turn: 6,
		proc: [ss_damage_s(5.0, [1], 1), ss_delay_s(1)],
	},
	awakes: [
		Attr_statusup_oattr(0,400,[0,1,0,0,0,]),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(400,0,[0,1,0,0,0,]),
		Attr_statusup(400,0,[0,1,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,400,[0,1,0,0,0,]),
		NEFTJOD(30),
		Fastskill(2),
	],
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}