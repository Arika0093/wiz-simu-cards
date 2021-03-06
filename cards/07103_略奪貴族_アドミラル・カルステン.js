{
	name: "略奪貴族 アドミラル・カルステン",
	cardno: 7103,
	imageno: 9105,
	hp: 2890,
	atk: 2908,
	cost: 36,
	attr: [0,-1],
	species: [8],
	islegend: false,
	ape: "大魔道杯 in ドルキマス",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>2チェインでダメージアップ(300%)",
		proc: ChainAttack(3.0, 2),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス1の効果を付与",
		turn: 3,
		proc: [panel_chainplus(1)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		NEFTJOD(30),
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(1),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
}