{
	name: "祝福を、今 アンジェリカ・ヴァイル",
	cardno: 7815,
	imageno: 9967,
	hp: 5322,
	atk: 2342,
	cost: 55,
	attr: [2,3],
	species: [1],
	islegend: true,
	as1: {
		desc: "<回復>味方全体のHPを回復(14%)",
		proc: Heal(0.14, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	awakes: [
		Fastskill(4),
		Panel_boost([0,0,1,0,0,],4),
		Spec_statusup(500,0, [1,]),
		Spec_statusup(0,500, [1,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Heal_afterbattle(10),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [0,0,0,1,0,]),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [0,0,0,1,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(17%)",
		proc: Heal(0.17, [1,1,1,1,1], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、ダメージ25%軽減の効果を付与。HP20%以下でさらにダメージ35%軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([1,1,1,0,0]), panel_attr_guard([1,1,1,1,1], ss_hp_less(0.2, 0.6, 0.25))],
	},
	Lawake: [
		Statusup(1000,0),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,100, [0,0,0,1,0,]),
	],
}