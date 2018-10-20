{
	name: "探偵一家 工藤優作&有希子&コナン",
	cardno: 10207,
	imageno: 6971,//ss
	hp: 3423,
	atk: 3020,
	cost: 50,
	attr: [0,2],
	species: [8],
	islegend: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<攻撃強化・ガード>火・雷属性の味方の攻撃力をアップ(30%)、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.3, [1, 0, 1, 0, 0], 0), as_guard(0.1, [1,1,1,1,1], 0)],
	},
	ss1: {
		desc: "<ダメージ強化>3ターンの間、味方の攻撃力をアップ(70%)、5チェインを消費しさらにアップ(50%)",
		turn: 6,
		proc: [ss_enhance_all(ss_chain_cost(5, 1.2, 0.7), 3, [1,1,1,1,1])],
	},
	as2: {
		desc: "<攻撃強化・ガード>火・雷属性の味方の攻撃力をアップ(50%)、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.5, [1, 0, 1, 0, 0], 0), as_guard(0.1, [1,1,1,1,1], 0)],
	},
	ss2: {
		desc: "<ダメージ強化>4ターンの間、味方の攻撃力をアップ(100%)、5チェインを消費しさらにアップ(50%)",
		turn: 8,
		proc: [ss_enhance_all(ss_chain_cost(5, 1.5, 1), 4, [1,1,1,1,1])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200,[1,0,1,0,0,]),
		Attr_statusup_subattr(500,0),
		Attr_statusup(200,0,[1,0,1,0,0,]),
		Fastskill(1),
		Statusup(200,0),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_subattr(0,500),
	],
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}