{
	name: "皆と一緒に駆け回る☆星たぬキング",
	cardno: 5665,
	imageno: 7469,
	hp: 3156,
	atk: 1983,
	cost: 27,
	attr: [0,-1],
	species: [4],
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<回復>火属性の味方を回復、妖精なら更に回復する(10%/15%)",
		proc: [Heal(0.10, [1,0,0,0,0], 0), SpecHeal(0.15, [1,0,0,0,0], [4], 0)],
	},
	ss1: {
		desc: "<状態異常回復>味方全体の状態異常回復",
		turn: 6,
		proc: [ss_abstate_cure()],
	},
	awakes: [
		Statusup(100,0),
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(2),
		Statusup(0,100),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Statusup(200,0),
		Spec_statusup(300,0, [4,]),
		Spec_statusup(0,300, [4,]),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<回復>火属性の味方を回復、妖精なら更に回復する(12%/18%)",
		proc: [Heal(0.12, [1,0,0,0,0], 0), SpecHeal(0.18, [1,0,0,0,0], [4], 0)],
	},
	ss2: {
		desc: "<状態異常回復>味方全体のHPを回復し(50%)、状態異常を回復する",
		turn: 9,
		proc: [ss_heal(0.50), ss_abstate_cure()],
	},
	Lawake: [
		Statusup(0,400),
		Statusup(400,0),
	],
}