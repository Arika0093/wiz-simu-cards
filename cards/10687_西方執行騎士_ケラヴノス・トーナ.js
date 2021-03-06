{
	name: "西方執行騎士 ケラヴノス・トーナ",
	cardno: 10687,
	imageno: 13131,
	imageno_prefix: "u8DCdL_",
	hp: 7105,
	atk: 1958,
	cost: 46,
	attr: [0,-1],
	species: [8],
	islegend: true,
	ape: "Birth of New Order 2",
	is_dist: true,
	as1: {
		desc: "<回復・攻撃強化>火属性の味方を回復(12%)し、デッキに単色の精霊が多いほど、火属性の味方の攻撃力をアップ(10%)(上限:5段階)",
		proc: [Heal(0.12, [1,0,0,0,0]), add_cond(ChainEnhance(0, [1,0,0,0,0], 0), as_singleattr_num(0, 0.1))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化 ",
		turn: 4,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_oattr(0,300, [1,0,0,0,0,]),
		Attr_statusup_oattr(300,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Awake_noeffect("経験値取得量アップ",1),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Attr_statusup(300,0, [1,0,0,0,0,]),
		Fastskill(3),
	],
	as2: {
		desc: "<回復・攻撃強化>火属性の味方を回復(15%)し、デッキに単色の精霊が多いほど、火属性の味方の攻撃力をアップ(10%)(上限:5段階)",
		proc: [Heal(0.15, [1,0,0,0,0]), add_cond(ChainEnhance(0, [1,0,0,0,0], 0), as_singleattr_num(0, 0.1))],
	},
	ss2: {
		desc: "<純属性パネル変換>ジャンルパネルをALL属性化し、回復の効果を付与、火単色の精霊が多いほどさらに効果値アップ(40%)",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0]), panel_healally(0.4)],
	},
	Lawake: [
		Attr_statusup_oattr(0,300, [1,0,0,0,0,]),
	],
}