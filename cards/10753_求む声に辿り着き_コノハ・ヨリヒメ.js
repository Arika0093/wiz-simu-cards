﻿{
	name: "求む声に辿り着き コノハ・ヨリヒメ",
	cardno: 10753,
	imageno: 6813,
	hp: 4022,
	atk: 3802,
	cost: 61,
	attr: [1,0],
	species: [9],
	islegend: true,
	ape: "八百万神秘譚Ⅱ",
	as1: {
		desc: "<複属性攻撃強化>5チェインで水属性の攻撃力をアップ(60%)、複属性を持つ精霊はさらにアップ(30%)、パネルの色が2色以上だとさらにアップ(60%)",
		proc: [ChainEnhance_SubAttr(0.6, 0.9, [0,1,0,0,0], [1,0,1,1,1], 5), add_cond(ChainEnhance_SubAttr(1.2, 1.5, [0,1,0,0,0], [1,0,1,1,1], 5) , as_panel_over2())],
	},
	ss1: {
		desc: "<特殊パネル変換>味方全体のMAXHPの50%を使い、ジャンルパネルにチェインがプラス3とスキルチャージプラス1の効果を付与(効果は、SPスキルを使うまで重複しません)",
		turn: 5,
		proc: [panel_multieffect([panel_skillboost(1), panel_chainplus(3)]), ss_consume_all(0.5)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([0,0,1,0,0,],20),
		NEFTJOD(30),
		Fastskill(4),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid(["poison", "attr_weaken", "death_limit", "all_sealed"]),
	],
	as2: {
		desc: "<複属性攻撃強化>5チェインで水属性の攻撃力をアップ(90%)、複属性を持つ精霊はさらにアップ(30%)、パネルの色が2色以上だとさらにアップ(60%)",
		proc: [ChainEnhance_SubAttr(0.9, 1.2, [0,1,0,0,0], [1,0,1,1,1], 5), add_cond(ChainEnhance_SubAttr(1.5, 1.8, [0,1,0,0,0], [1,0,1,1,1], 5) , as_panel_over2())],
	},
	ss2: {
		desc: "<特殊パネル変換>味方全体のMAXHPの50%を使い、ジャンルパネルにチェインがプラス4とスキルチャージプラス1の効果を付与(効果は、SPスキルを使うまで重複しません)",
		turn: 6,
		proc: [panel_multieffect([panel_skillboost(1), panel_chainplus(4)]), ss_consume_all(0.5)],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,1000),
	],
}