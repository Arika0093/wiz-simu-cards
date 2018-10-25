{
	name: "空の昏き英雄 ディートリヒ・ベルク",
	cardno: 10256,
	imageno: 6469,
	hp: 2794,
	atk: 4892,
	cost: 64,
	attr: [0,2],
	species: [8],
	alias: ["元帥"],
	islegend: true,
	ape: "ドルキマスⅠ",
	as1: {
		desc: "<分散攻撃>4チェインで敵全体へ分散攻撃(500%)、10チェインでさらにダメージアップ(300%)",
		proc: [ChainVarianceAttack(5.0, 4), ChainVarianceAttack(8.0, 10)]
	},
	ss1: {
		desc: "<特殊パネル変換>味方全体のMAXHPの50%を使い、ジャンルパネルにチェインがプラス3とスキルチャージプラス1の効果を付与(効果は、SPスキルを使うまで重複しません)",
		turn: 5,
		proc: [panel_multieffect([panel_skillboost(1), panel_chainplus(3)]), ss_consume_all(0.5)],
	},
	awakes: [
		Costdown(20),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([1,0,0,0,0,],4),
		NEFTJOD(30),
		Fastskill(4),
		Attr_relief([0,1,0,0,0,],20),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<分散攻撃>4チェインで敵全体へ分散攻撃(600%)、10チェインでさらにダメージアップ(300%)",
		proc: [ChainVarianceAttack(6.0, 4), ChainVarianceAttack(9.0, 10)]
	},
	ss2: {
		desc: "<特殊パネル変換>味方全体のMAXHPの50%を使い、ジャンルパネルにチェインがプラス4とスキルチャージプラス1の効果を付与(効果は、SPスキルを使うまで重複しません)",
		turn: 6,
		proc: [panel_multieffect([panel_skillboost(1), panel_chainplus(4)]), ss_consume_all(0.5)],
	},
	Lawake: [
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Statusup(0,1000),
	],
}