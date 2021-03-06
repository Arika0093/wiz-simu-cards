{
	name: "ブンブンサマー！バズミィ・インク",
	cardno: 8713,
	imageno: 10889,
	hp: 4005,
	atk: 1054,
	cost: 35,
	attr: [2,1],
	species: [4],
	islegend: false,
	ape: "大魔道杯 in エタクロⅢ",
	is_dist: true,
	as1: {
		desc: "<回復・攻撃強化>水・雷属性の味方のHPを回復(11%)、さらに水・雷属性の攻撃力をアップ(20%)",
		proc: [Heal(0.11, [0,1,1,0,0], 0), ChainEnhance(0.2, [0,1,1,0,0], 0)],
	},
	ss1: {
		desc: "<蘇生>味方全体のHPを回復し(30%)、さらに水・雷属性の味方を30%で蘇生 ",
		turn: 9,
		proc: [ss_heal(0.3), ss_resurrection([0,1,1,0,0], 0.1)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Attr_statusup(100,0, [0,1,1,0,0,]),
		Fastskill(3),
		Attr_statusup_sattr(0,100, [0,1,1,0,0,], 0,100, [0,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,1,0,0,], 100,0, [0,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
}