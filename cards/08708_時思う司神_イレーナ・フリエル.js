{
	name: "時思う司神 イレーナ・フリエル",
	cardno: 8708,
	imageno: 10884,
	hp: 5401,
	atk: 2031,
	cost: 53,
	attr: [1,3],
	species: [1],
	islegend: true,
	ape: "エタクロⅡ",
	as1: {
		desc: "<回復>水属性の味方を回復(9%)、複属性が光属性だとさらに回復(8%)",
		proc: [Heal(0.09, [0,1,0,0,0], 0), add_cond(Heal(0.17, [0,1,0,0,0], 0), when_subattr_match([0,1,0,0,0], [0,0,0,1,0]))],
	},
	as2: {
		desc: "<回復>水属性の味方を回復(12%)、複属性が光属性だとさらに回復(8%)",
		proc: [Heal(0.12, [0,1,0,0,0], 0), add_cond(Heal(0.20, [0,1,0,0,0], 0), when_subattr_match([0,1,0,0,0], [0,0,0,1,0]))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・光属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,0,1,0])],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・光属性化し、回復の効果を付与(40%)",
		turn: 6,
		proc: [ss_panel_change([0,1,0,1,0]), panel_healally(0.40)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200,[0,1,0,0,0,]),
		Attr_statusup(200,0,[0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(3),
		Attr_relief([1,1,1,1,1,],10),
		NEFTJOD(30),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,300,[0,0,0,1,0,]),
		Attr_statusup_sattr(100,0,[0,1,0,0,0,],300,0,[0,0,0,1,0,]),
		Abstate_invalid("as_sealed"),
	],
	Lawake: [
		Statusup(1000,0),
		Attr_statusup(0,200,[0,1,0,0,0,]),
	],
}