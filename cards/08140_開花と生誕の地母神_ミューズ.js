{
	name: "開花と生誕の地母神 ミューズ",
	cardno: 8140,
	imageno: 10274,
	hp: 5305,
	atk: 2534,
	cost: 57,
	attr: [1,0],
	species: [1],
	disable: true,
	islegend: true,
    ape: "周年記念精霊(1周年)",
	as1: {
		desc: "<複属性攻撃強化・種族攻撃強化>水属性の攻撃力をアップ(20%)、複属性が火属性だとさらにアップ(50%)、神族はさらにアップ(50%)",
		proc: [ChainEnhance_SubAttr(0.2, 0.7, [0,1,0,0,0], [1,0,0,0,0], 0),add_cond(ChainEnhance_SubAttr(0.2, 1.2, [0,1,0,0,0], [1,0,0,0,0], 0), when_spec_match([1]))],
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],4),
		Fastskill(2),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Awake_Chainboost(1),
		Spec_statusup(0,200, [1,]),
		Spec_statusup(200,0, [1,]),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<複属性攻撃強化・種族攻撃強化>水属性の攻撃力をアップ(50%)、複属性が火属性だとさらにアップ(50%)、神族はさらにアップ(50%)",
		proc: [ChainEnhance_SubAttr(0.5, 1.0, [0,1,0,0,0], [1,0,0,0,0], 0),add_cond(ChainEnhance_SubAttr(0.5, 1.5, [0,1,0,0,0], [1,0,0,0,0], 0), when_spec_match([1]))],
	},
	ss2: {
		desc: "<遅延>敵全体の攻撃ターンを3遅らせ、20チェインで更に1遅らせる",
		turn: 10,
		proc: [ss_delay_all(ss_chain_cond(20, 4, 3))],
	},
	Lawake: [
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Statusup(500,0),
		NEFTJOD(30),
	],
}