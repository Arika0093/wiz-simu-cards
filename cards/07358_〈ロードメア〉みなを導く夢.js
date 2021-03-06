{
	name: "〈ロードメア〉みなを導く夢",
	cardno: 7358,
	imageno: 9383,
	hp: 3112,
	atk: 2548,
	cost: 43,
	attr: [1,4],
	species: [2],
	islegend: true,
	ape: "黄昏メアレスⅡ",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>水属性の攻撃力をアップ(30%)、複属性が闇属性だとさらにアップ(40%)",
		proc: ChainEnhance_SubAttr(0.3, 0.7, [0,1,0,0,0], [0,0,0,0,1], 0),
	},
	ss1: {
		desc: "<時限大魔術>スキル反射を無視し、4ターン後に敵単体へ水属性のダメージ(1000%)",
		turn: 2,
		proc: [ss_damage_timebomb(10, [1], 1, 4), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(0,100),
		Attr_relief([0,0,0,1,0,],10),
		Panel_boost([0,1,0,0,0,],1),
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Spec_statusup(200,0, [2,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 100,0, [0,0,0,0,1,]),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,100, [0,0,0,0,1,]),
	],
	as2: {
		desc: "<複属性攻撃強化>水属性の攻撃力をアップ(60%)、複属性が闇属性だとさらにアップ(40%)",
		proc: ChainEnhance_SubAttr(0.6, 1.0, [0,1,0,0,0], [0,0,0,0,1], 0),
	},
	ss2: {
		desc: "<時限大魔術>スキル反射を無視し、4ターン後に敵単体へ水属性のダメージ(2000%)",
		turn: 3,
		proc: [ss_damage_timebomb(20, [1], 1, 4), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
}