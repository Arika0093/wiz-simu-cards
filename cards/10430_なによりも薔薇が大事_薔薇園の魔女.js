{
	name: "なによりも薔薇が大事 薔薇園の魔女",
	cardno: 10430,
	imageno: 12770,
	imageno_prefix: "E4pSBg_",
	hp: 3505,
	atk: 2117,
	cost: 42,
	attr: [0,4],
	species: [-1],
	islegend: true,
	ape: "コラボ(魔法少女まどか☆マギカ)",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(30%)、複属性が闇属性だとさらにアップ(40%)",
		proc: ChainEnhance_SubAttr(0.3, 0.7, [1,0,0,0,0], [0,0,0,0,1], 0),
	},
	ss1: {
		desc: "<時限大魔術>スキル反射を無視し、4ターン後に敵単体へ火属性のダメージ(1000%)(上限設置数:5)",
		turn: 2,
		proc: [ss_damage_timebomb(10, [0], 1, 4), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Fastskill(1),
		Awake_noeffect("ゴールド取得量アップ",3),
		Attr_statusup_subattr(0, 300),
		Attr_statusup_subattr(300, 0),

		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(2),
	],
	as2: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(60%)、複属性が闇属性だとさらにアップ(40%)",
		proc: ChainEnhance_SubAttr(0.6, 1.0, [1,0,0,0,0], [0,0,0,0,1], 0),
	},
	ss2: {
		desc: "<時限大魔術>スキル反射を無視し、4ターン後に敵単体へ火属性のダメージ(2000%)(上限設置数:5)",
		turn: 3,
		proc: [ss_damage_timebomb(20, [0], 1, 4), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup_subattr(0, 300),
		Statusup(0,500),
	],
}