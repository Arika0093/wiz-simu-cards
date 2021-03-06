{
	name: "帝位簒奪の首魁 サクシード・レグア",
	cardno: 7651,
	imageno: 9711,
	hp: 3984,
	atk: 2004,
	cost: 44,
	attr: [0,4],
	species: [3],
	islegend: true,
	ape: "その光は淡く碧く 第二章 儚き聖域",
	is_dist: true,
	as1: {
		desc: "<回復>火属性の味方のHPを回復(11%)、Lモードの精霊の数に応じてさらに回復(1%)",
		proc: add_cond(Heal(0.11, [1,0,0,0,0], 0), as_legendnum(0.01)),
	},
	ss1: {
		desc: "<起死回生>4ターン、致死ダメージを受けたら味方一人を一度だけHP50%で起死回生",
		turn: 4,
		proc: [ss_toselect_one(ss_revival(0.5, 4))],
	},
	awakes: [
		Attr_relief([0,0,0,1,0,],10),
		Statusup(200,0),
		Fastskill(2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],1),
		Spec_statusup(200,0, [3,]),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,0,0,0,1,]),
		Panel_boost([1,0,0,0,0,],2),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復(14%)、Lモードの精霊の数に応じてさらに回復(1%)",
		proc: add_cond(Heal(0.14, [1,0,0,0,0], 0), as_legendnum(0.01)),
	},
	ss2: {
		desc: "<起死回生>6ターン、致死ダメージを受けたら味方一人を一度だけHP100%で起死回生",
		turn: 6,
		proc: [ss_toselect_one(ss_revival(1, 6))],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}