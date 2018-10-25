{
	name: "聖剣の旅路 ジャビー・ユドラム",
	cardno: 10658,
	imageno: 13101,
	hp: 5095,
	atk: 3001,
	cost: 40,
	attr: [0,-1],
	species: [8],
	islegend: true,
	ape: "大魔道杯 in 月夜の思い出",
	is_dist: true,
	as1: {
		desc: "<回復>火属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [1,0,0,0,0,]),
	},
	ss1: {
		desc: "<弱体化大魔術>スキル反射を無視し、敵単体へ火属性のダメージ(100%)、さらに1ターンの間、敵の火属性に対する防御力を弱体化(50%)",
		turn: 8,
		proc: [ss_damage_s(1.0, [0], 1), ss_attr_weaken_s([1,0,0,0,0], 0.5, 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		Abstate_invalid("ss_sealed"),
		Fastskill(2),
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Attr_statusup(300,0, [1,0,0,0,0,]),
		Attr_statusup_oattr(0,300, [1,0,0,0,0,]),
		Attr_statusup_oattr(300,0, [1,0,0,0,0,]),
		NEFTJOD(30),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復(15%)",
		proc: Heal(0.15, [1,0,0,0,0,]),
	},
	ss2: {
		desc: "<弱体化大魔術>スキル反射を無視し、敵単体へ火属性のダメージ(100%)、さらに2ターンの間、敵の火属性に対する防御力を弱体化(150%)",
		turn: 15,
		proc: [ss_damage_s(1.0, [0], 1), ss_attr_weaken_s([1,0,0,0,0], 1.5, 2), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,500),
	],
}