{
	name: "少年探偵団の頭脳 円谷光彦",
	cardno: 10213,
	imageno: 6989,//ss
	hp: 5182,
	atk: 2854,
	cost: 40,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<回復>水属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<ガード>2ターン火・雷属性のダメージを50%軽減する",
		turn: 7,
		proc: [ss_attr_guard([1,0,1,0,0], 0.5, 2)],
	},
	as2: {
		desc: "<回復>水属性の味方のHPを回復(15%)",
		proc: Heal(0.15, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<ガード>4ターン火・雷属性のダメージを50%軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,0,1,0,0], 0.5, 4)],
	},
	awakes: [
		Awake_noeffect("経験値取得量アップ",1),
		Attr_statusup_oattr(0,400,[0,1,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Heal_afterbattle(10),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(400,0,[0,1,0,0,0,]),
		Attr_statusup(0,400,[0,1,0,0,0,]),
		Attr_statusup(400,0,[0,1,0,0,0,]),
		Fastskill(3),
	],
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}