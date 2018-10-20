{
	name: "ふたりを繋ぐ鎖の絆 和葉&平次",
	cardno: 10206,
	imageno: 6968,
	hp: 5606,
	atk: 2342,
	cost: 39,
	attr: [2,-1],
	species: [8],
	islegend: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<回復>雷属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<効果解除>敵全体のガード&ダメージブロックを解除する",
		turn: 7,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all")],
	},
	as2: {
		desc: "<回復>雷属性の味方のHPを回復(15%)",
		proc: Heal(0.15, [0,0,1,0,0], 0),
	},
	ss2: {
		desc: "<効果解除大魔術>スキル反射を無視し、敵全体のガード&ダメージブロックを解除し、雷属性のダメージ(300%)。HP20%以下でさらに属性免疫を解除し、ダメージアップ(600%)",
		turn: 10,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all"), ss_damage_all(ss_hp_less(0.20, 9.0, 3.0), [2]), ss_ignore_skillcounter()],
		//,ss_hp_less_skill(0.2, ss_break_attrIncreaseGuard("all"))
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_oattr(0,400,[0,0,1,0,0,]),
		Fastskill(1),
		Attr_statusup_oattr(400,0,[0,0,1,0,0,]),
		Attr_statusup(0,400,[0,0,1,0,0,]),
		Attr_statusup(400,0,[0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Fastskill(2),
		Heal_afterbattle(10),
	],
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}