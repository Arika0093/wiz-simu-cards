{
	name: "荒鷹ホルン ブルーノ・シャルルリエ",
	cardno: 10266,
	imageno: 12632,
	hp: 4526,
	atk: 2138,
	cost: 47,
	attr: [2,0],
	species: [8],
	islegend: true,
	is_dist: true,
	ape: "黒ウィズコンサート大魔道杯",
	as1: {
		desc: "<回復>パネルが2色、3色で火・雷属性の味方のHPを回復(30%,34%)",
		proc: ChainPanelsHeal(0, 0.30, 0.34, [1,0,1,0,0], 0),
	},
	as2: {
		desc: "<回復>パネルが2色、3色で火・雷属性の味方のHPを回復(34%,40%)",
		proc: ChainPanelsHeal(0, 0.34, 0.40, [1,0,1,0,0], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・雷属性化",
		turn: 3,
		proc: [ss_panel_change([1,0,1,0,0])],
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(1),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,200, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 200,0, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	Lawake: [
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Statusup(500,0),
	],
}