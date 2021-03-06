{
	name: "世界を見守る少女 アッカ&ロッカ",
	cardno: 9223,
	imageno: 8171,
	hp: 6231,
	atk: 2145,
	cost: 59,
	attr: [2,3],
	species: [8],
	islegend: true,
	ape: "幻魔特区スザクⅢ",
	as1: {
		desc: "<回復>雷属性の味方を回復(14%)、HP20%以下でさらに回復(25%)",
		proc: [Heal(0.14, [0,0,1,0,0], 0), add_cond(Heal(0.39, [0,0,1,0,0], 0), when_hp_less(0.2))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷・光属性化",
		turn: 3,
		proc: [ss_panel_change([0,0,1,1,0])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(3),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Awake_noeffect("経験値取得量アップ",2),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,100, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 100,0, [0,0,0,1,0,]),
		Heal_afterbattle(10),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<回復>雷属性の味方を回復(17%)、HP20%以下でさらに回復(25%)",
		proc: [Heal(0.17, [0,0,1,0,0], 0), add_cond(Heal(0.42, [0,0,1,0,0], 0), when_hp_less(0.2))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷・光属性化し、ダメージ25%軽減の効果を付与。HP20%以下でさらにダメージ35%軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([0,0,1,1,0]), panel_attr_guard([1,1,1,1,1], ss_hp_less(0.20, 0.60, 0.25))],
	},
	Lawake: [
		Statusup(1000,0),
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
}