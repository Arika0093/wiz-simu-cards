{
	name: "執行騎士監査役 シリス・アロキア",
	cardno: 9979,
	imageno: 12328,
	hp: 2885,
	atk: 3897,
	cost: 55,
	attr: [0,3],
	species: [8],
	islegend: true,
	ape: "Birth of New Order",
	as1: {
		desc: "<チェイン攻撃>20チェインでダメージアップ(1600%)、40チェインで更にダメージアップ(1500%)",
		proc: [ChainAttack(16.0, 20), ChainAttack(31.0, 40)],
	},
	ss1: {
		desc: "<斬撃大魔術>スキル反射を無視し、火・光属性の5連撃(400%)、さらに連撃数分チェインプラス",
		turn: 6,
		proc: [ss_damage_slash(4.0, [0,3], 5), ss_ignore_skillcounter()],
	},
	awakes: [
		Awake_secondfast(2),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,0,1,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Awake_secondfast(2),
		Panel_boost([1,0,0,0,0,],2),
		Abstate_invalid(["poison", "attr_weaken", "death_limit", "all_sealed"]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>20チェインでダメージアップ(1700%)、40チェインで更にダメージアップ(1500%)",
		proc: [ChainAttack(17.0, 20), ChainAttack(32.0, 40)],
	},
	ss2: {
		desc: "<斬撃大魔術>スキル反射を無視し、火・光属性の5連撃(400%)、さらに連撃数分チェインプラス",
		turn: 6,
		proc: [ss_damage_slash(4.0, [0,3], 5), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1500),
		Statusup(500,0),
	],
}