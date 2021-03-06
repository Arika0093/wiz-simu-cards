{
	name: "大気圏突破仕様神輿 オオミコシガミ",
	cardno: 8554,
	imageno: 10724,
	hp: 3721,
	atk: 3756,
	cost: 46,
	attr: [2,-1],
	species: [6],
	islegend: true,
	ape: "大魔道杯 in 八百万Ⅳ",
	is_dist: true,
	as1: {
		desc: "<回復>雷属性の味方を回復(9%),10チェインで更に回復(10%)",
		proc: [Heal(0.09, [0,0,1,0,0], 0), Heal(0.19, [0,0,1,0,0], 10)],
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 13,
		proc: [ss_latest_copy()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		Attr_statusup_oattr(300,0, [0,0,1,0,0,]),
		Awake_secondfast(3),
		Heal_afterbattle(10),
		Abstate_invalid("ss_sealed"),
		Awake_secondfast(4),
		Attr_statusup(0,300, [0,0,1,0,0,]),
		Attr_statusup(300,0, [0,0,1,0,0,]),
		Awake_secondfast(4),
	],
	as2: {
		desc: "<回復>雷属性の味方を回復(12%),10チェインで更に回復(10%)",
		proc: [Heal(0.12, [0,0,1,0,0], 0), Heal(0.22, [0,0,1,0,0], 10)],
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 13,
		proc: [ss_latest_copy()],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,100, [0,0,1,0,0,]),
	],
}