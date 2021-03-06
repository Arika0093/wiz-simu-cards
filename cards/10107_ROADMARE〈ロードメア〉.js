{
	name: "ROADMARE〈ロードメア〉",
	cardno: 10107,
	imageno: 12466,
	hp: 2018,
	atk: 4577,
	cost: 56,
	attr: [0,4],
	species: [2],
	islegend: true,
	ape: "大魔道杯 in 黄昏メアレス",
	is_dist: true,
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ(200%)、チェインを10消費して、さらにダメージアップ(2400%)",
		proc: add_cond(ChainAttack(2.0, 0), as_reducechain(24.0, 10)),
	},
	ss1: {
		desc: "<斬撃大魔術>スキル反射を無視し、火・闇属性の5連撃(200%)、さらに連撃数分チェインプラス",
		turn: 10,
		proc: [ss_damage_slash(2.0, [0,4], 5), ss_ignore_skillcounter()],
	},
	awakes: [
		Awake_secondfast(2),
		Attr_statusup_subattr(0, 300),
		Attr_statusup_subattr(300, 0),
		Awake_secondfast(2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Awake_secondfast(2),
		Abstate_invalid("as_sealed"),
		Awake_secondfast(2),
		Abstate_invalid("discharge"),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ(300%)、チェインを10消費して、さらにダメージアップ(2400%)",
		proc: add_cond(ChainAttack(3.0, 0), as_reducechain(24.0, 10)),
	},
	ss2: {
		desc: "<斬撃大魔術>スキル反射を無視し、火・闇属性の5連撃(200%)、さらに連撃数分チェインプラス",
		turn: 10,
		proc: [ss_damage_slash(2.0, [0,4], 5), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,2000),
	],
}