{
	name: "〈ピュアメア〉黄昏に咲く夢",
	cardno: 5846,
	imageno: 7652,
	hp: 3003,
	atk: 2247,
	cost: 22,
	attr: [2,0],
	species: [2],
	islegend: true,
	ape: "黄昏メアレスⅠ",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が火属性だとさらにアップ(30%/70%)",
		proc: ChainEnhance_SubAttr(0.30, 0.70, [0,0,1,0,0], [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ火・雷属性のダメージ(150%)",
		turn: 7,
		proc: [ss_damage_all(1.5, [0, 2]), ss_ignore_skillcounter()],
	},
	awakes: [
		Fastskill(1),
		Attr_statusup(100,0, [1,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup(0,100, [1,0,1,0,0,]),
		NEFTJOD(30),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Attr_statusup(0, 200, [1, 0, 1, 0, 0, ]),
		Awake_noeffect("ドロップアップ", 1),
	],
	as2: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が火属性だとさらにアップ(60%/100%)",
		proc: ChainEnhance_SubAttr(0.60, 1.00, [0,0,1,0,0], [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ火・雷属性のダメージ(220%)",
		turn: 10,
		proc: [ss_damage_all(2.2, [0,2]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
	],
}