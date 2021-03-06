{
	name: "ふたりを繋ぐ鎖の絆 和葉&平次",
	cardno: 5276,
	imageno: 6968,
	hp: 3256,
	atk: 2332,
	cost: 33,
	attr: [2,-1],
	species: [8],
	disable: true,
	islegend: false,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<回復>雷属性の味方のHPを回復(11%)",
		proc: Heal(0.11, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<効果解除>敵全体のガード&ダメージブロックを解除する",
		turn: 8,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all")],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Fastskill(1),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Fastskill(2),
		Heal_afterbattle(10),
	],
}