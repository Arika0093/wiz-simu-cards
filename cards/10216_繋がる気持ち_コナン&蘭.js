{
	name: "繋がる気持ち コナン&蘭",
	cardno: 10216,
	imageno: 7030,
	hp: 5091,
	atk: 2630,
	cost: 38,
	attr: [2,-1],
	species: [8],
	islegend: true,
	is_dist: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<攻撃強化・ガード>3チェインで雷属性の味方の攻撃力をアップ(45%)、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.45, [0,0,1,0,0], 3), as_guard(0.10, [1,1,1,1,1], 3)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを500アップ(上限値：3000)",
		turn: 7,
		proc: [ss_statusup_all([500, 500], [3000, 3000], -1)],
	},
	awakes: [
		Attr_statusup_oattr(300,0, [0,0,1,0,0,]),
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		Attr_statusup(300,0, [0,0,1,0,0,]),
		Attr_statusup(0,300, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],3),
		Attr_relief([0,1,0,0,0,],10),
		Fastskill(2),
		Heal_afterbattle(10),
		Spec_statusup(0,200, [8,]),
		Spec_statusup(200,0, [8,]),
	],
	as2: {
		desc: "<攻撃強化・ガード>3チェインで雷属性の味方の攻撃力をアップ(65%)、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.65, [0,0,1,0,0], 3), as_guard(0.10, [1,1,1,1,1], 3)],
	},
	ss2: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを1000アップ(上限値：3000)",
		turn: 9,
		proc: [ss_statusup_all([1000, 1000], [3000, 3000], -1)],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Statusup(500,0),
	],
}