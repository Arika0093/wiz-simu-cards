{
	name: "夏のひととき セリーヌ・エヴァンス",
	cardno: 8662,
	imageno: 10835,
	hp: 4875,
	atk: 4875,
	cost: 50,
	attr: [1,-1],
	species: [1],
	islegend: true,
	ape: "エタクロⅢ",
	as1: {
		desc: "<回復>水属性の味方を回復(9%),10チェインで更に回復(10%)",
		proc: [Heal(0.09, [0,1,0,0,0], 0), Heal(0.19, [0,1,0,0,0], 10)],
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 12,
		proc: [ss_latest_copy()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Awake_secondfast(5),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Abstate_invalid("discharge"),
		Heal_afterbattle(10),
		Awake_secondfast(5),
	],
	as2: {
		desc: "<回復>水属性の味方を回復(12%),10チェインで更に回復(10%)",
		proc: [Heal(0.12, [0,1,0,0,0], 0), Heal(0.19, [0,1,0,0,0], 22)],
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 12,
		proc: [ss_latest_copy()],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,1000),
	],
}