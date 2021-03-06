{
	name: "伝説の調香師 フロリア・リリー",
	cardno: 5499,
	imageno: 7284,
	hp: 3038,
	atk: 2726,
	cost: 32,
	attr: [1,-1],
	species: [9],
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<回復>水属性の味方のHPを回復(11%)",
		proc: Heal(0.11, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<継続回復>3ターン味方全体を徐々に回復する(15%)",
		turn: 6,
		proc: [ss_regenerate(0.15, 3)],
	},
	awakes: [
		Awake_noeffect("経験値取得量アップ", 1),
		Fastskill(1),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],1),
		NEFTJOD(30),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復(14%)",
		proc: Heal(0.14, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する(20%)",
		turn: 9,
		proc: [ss_regenerate(0.20, 5)],
	},
	Lawake: [
		Statusup(0,400),
		Statusup(400,0),
	],
}