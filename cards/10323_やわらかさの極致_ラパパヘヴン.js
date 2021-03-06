{
	name: "やわらかさの極致 ラパパヘヴン",
	cardno: 10323,
	imageno: 8372,
	hp: 6205,
	atk: 3742,
	cost: 63,
	attr: [2,3],
	species: [4],
	islegend: true,
	ape: "GW2015",
	as1: {
		desc: "<複属性攻撃強化・種族攻撃強化>3チェインで雷属性の攻撃力をアップ(30%)、複属性が光属性だとさらにアップ(50%)、神族・妖精はさらにアップ(50%)",
		proc: [ChainEnhance_SubAttr(0.5, 1.0, [0,0,1,0,0], [0,0,0,1,0], 3), add_cond(ChainEnhance_SubAttr(0.5, 1.5, [0,0,1,0,0], [0,0,0,1,0], 3), when_spec_match([1,4]))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷・光属性化",
		turn: 3,
		proc: [ss_panel_change([2,3])],
	},
	awakes: [
		Costdown(20),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,100, [0,0,0,1,0,]),
		Attr_statusup_sattr(200,0, [0,0,1,0,0,], 100,0, [0,0,0,1,0,]),
		Panel_boost([0,0,1,0,0,],4),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(3),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [0,0,0,1,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化・種族攻撃強化>3チェインで雷属性の攻撃力をアップ(60%)、複属性が光属性だとさらにアップ(50%)、神族・妖精はさらにアップ(50%)",
		proc: [ChainEnhance_SubAttr(0.8, 1.3, [0,0,1,0,0], [0,0,0,1,0], 3), add_cond(ChainEnhance_SubAttr(0.8, 1.8, [0,0,1,0,0], [0,0,0,1,0], 3), when_spec_match([1,4]))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷・光属性化し、ダメージ軽減・SPチャージ・チェイン・攻撃力アップをランダムで付与(10~55%、1~2、1~4、75~150%)",
		turn: 7,
		proc: [ss_panel_change([2,3]), panel_skillboost(1), panel_skillboost(2), panel_skillboost(3), panel_chainplus(1), panel_chainplus(10), panel_attackup(0.75), panel_attackup(3.5), panel_attr_guard([1,1,1,1,1], 0.1), panel_attr_guard([1,1,1,1,1], 0.6)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(100,0, [0,0,1,0,0,]),
	],
}