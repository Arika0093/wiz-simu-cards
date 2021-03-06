{
	name: "神の血、人の心 エレニ・ビセット",
	cardno: 7564,
	imageno: 9628,
	hp: 5112,
	atk: 3409,
	cost: 53,
	attr: [0,-1],
	species: [1],
	disable: true,
	islegend: true,
	ape: "イタズラ女神とうさぎのおはなし",
	as1: {
		desc: "<攻撃強化・回復>火属性の味方のHPを回復(13%)、さらに火属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.13, [1,0,0,0,0], 0), ChainEnhance(0.3, [1,0,0,0,0], 0)],
	},
	ss1: {
		desc: "<ガード>4ターン水・雷属性のダメージを50%軽減する",
		turn: 9,
		proc: [ss_attr_guard([0,1,1,0,0], 0.5, 4)],
	},
	awakes: [
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Statusup(200,0),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Fastskill(2),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Spec_statusup(0,400, [1,]),
		Spec_statusup(400,0, [1,]),
	],
	as2: {
		desc: "<攻撃強化・回復>火属性の味方のHPを回復(16%)、さらに火属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.16, [1,0,0,0,0], 0), ChainEnhance(0.3, [1,0,0,0,0], 0)],
	},
	ss2: {
		desc: "<ガード>5ターン水・雷属性のダメージを50%軽減する、5チェインを消費しさらに2ターン軽減",
		turn: 12,
		proc: [ss_attr_guard([0,1,1,0,0], 0.5, ss_chain_cost(5, 7, 5))],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
	],
}