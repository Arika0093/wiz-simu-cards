{
	name: "ありうべからざる狂夢 オプスクルム",
	cardno: 7378,
	imageno: 9421,
	hp: 3891,
	atk: 3018,
	cost: 53,
	attr: [0,4],
	species: [2],
	islegend: true,
	ape: "黄昏メアレスⅡ",
	as1: {
		desc: "<チェイン攻撃・属性特効>8チェインでダメージアップ、光属性の敵だとさらにダメージアップ(550%/750%)",
		proc: [ChainAttack(5.5, 8), ChainAttrAttack(7.5, 8, [0,0,0,1,0])],
	},
	ss1: {
		desc: "<毒>8ターン溜めた後、スキル反射を無視し、30ターン敵全体に毒のダメージを与える(65000)",
		turn: 8,
		charged: 8,
		proc: [poison(65000, 30), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(0,200),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(4),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Fastskill(4),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Abstate_invalid("poison"),
	],
	as2: {
		desc: "<チェイン攻撃・属性特効>8チェインでダメージアップ、光属性の敵だとさらにダメージアップ(650%/850%)",
		proc: [ChainAttack(6.5, 8), ChainAttrAttack(8.5, 8, [0,0,0,1,0])],
	},
	ss2: {
		desc: "<毒>8ターン溜めた後、スキル反射を無視し、30ターン敵全体に毒のダメージを与える(65000)",
		turn: 8,
		charged: 8,
		proc: [poison(65000, 30), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
}