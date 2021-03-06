{
	name: "古き魂の鏡身 ミュール&レベリオー",
	cardno: 6342,
	imageno: 8177,
	hp: 3345,
	atk: 5105,
	cost: 52,
	attr: [0,-1],
	species: [2],
	islegend: true,
	disable: true,
	ape: "幻魔特区スザクⅢ",
	as1: {
		desc: "<属性特効連撃>雷属性の敵単体へ特効8連撃、20チェインで更に特効ダメージ(300%/2000%)",
		proc: [ChainDualAttrAttack(3.0, 0, 8, [0,0,1,0,0]), ChainDualAttrAttack(20, 20, 8, [0,0,1,0,0])],
	},
	ss1: {
		desc: "<斬撃大魔術>8ターン溜めた後、スキル反射を無視し、火属性の20連撃(3000%)、さらに連撃数分チェインプラス",
		turn: 8,
		charged: 8,
		proc: [ss_damage_slash(30, [0], 20), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Fastskill(4),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Fastskill(4),
	],
	as2: {
		desc: "<属性特効連撃>雷属性の敵単体へ特効8連撃、20チェインで更に特効ダメージ(300%/2100%)",
		proc: [ChainDualAttrAttack(3.0, 0, 8, [0,0,1,0,0]), ChainDualAttrAttack(21, 20, 8, [0,0,1,0,0])],
	},
	ss2: {
		desc: "<斬撃大魔術>8ターン溜めた後、スキル反射を無視し、火属性の20連撃(3000%)、さらに連撃数分チェインプラス",
		turn: 8,
		charged: 8,
		proc: [ss_damage_slash(30, [0], 20), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(0,500),
	],
}