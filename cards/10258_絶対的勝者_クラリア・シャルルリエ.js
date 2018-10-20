{
	name: "絶対的勝者 クラリア・シャルルリエ",
	cardno: 10258,
	imageno: 6487,
	hp: 3899,
	atk: 3810,
	cost: 61,
	attr: [2,0],
	species: [8],
	islegend: true,
	ape: "ドルキマスⅠ",
	as1: {
		desc: "<攻撃強化・連撃>雷属性の味方の攻撃力をアップ(30%)、4チェインで敵単体を4回連続攻撃(400%)",
		proc: [ChainEnhance(0.3, [0,0,1,0,0], 0), ChainDualAttack(4.0, 4, 4)]
	},
	ss1: {
		desc: "<ダメージ強化>味方全体のMAXHPの50%を使い、3ターン火・雷属性の味方の攻撃力をアップ(120%)",
		turn: 5,
		proc: [ss_enhance_all(1.5, 3, [1,0,1,0,0]), ss_consume_all(0.5)],
	},
	awakes: [
		Costdown(20),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],4),
		NEFTJOD(60),
		Abstate_invalid("ss_sealed"),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Fastskill(4),
		Awake_noeffect("難易度ダウン",1),
	],
	as2: {
		desc: "<攻撃強化・連撃>雷属性の味方の攻撃力をアップ(30%)、4チェインで敵単体を4回連続攻撃(500%)",
		proc: [ChainEnhance(0.3, [0,0,1,0,0], 0), ChainDualAttack(5.0, 4, 4)]
	},
	ss2: {
		desc: "<ダメージ強化>味方全体のMAXHPの50%を使い、4ターン火・雷属性の味方の攻撃力をアップ(150%)",
		turn: 8,
		proc: [ss_enhance_all(2.5, 7, [1,0,1,0,0]), ss_consume_all(0.5)],
	},
	Lawake: [
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Statusup(1000,0),
	],
}