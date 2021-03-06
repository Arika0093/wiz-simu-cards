{
	name: "コナンの相棒 灰原哀",
	cardno: 5270,
	imageno: 6974,
	hp: 2310,
	atk: 3031,
	cost: 44,
	attr: [1,0],
	species: [8],
	disable: true,
	islegend: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<回復>火・水属性の味方を回復(14%)",
		proc: Heal(0.14, [1,1,0,0,0], 0),
	},
	ss1: {
		desc: "<犠牲魔術>味方全体のMAXHPの50%を使い敵全体へダメージ(90%×人数)",
		turn: 8,
		proc: [ss_damage_all(ss_consume_all_cond(0.9, 0.5), [1])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(1),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Statusup(0,200),
		Statusup(200,0),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
		Attr_statusup(200,0, [1,1,0,0,0,]),
	],
	as2: {
		desc: "<回復>火・水属性の味方を回復(17%)",
		proc: Heal(0.17, [1,1,0,0,0], 0),
	},
	ss2: {
		desc: "<犠牲魔術>味方全体のMAXHPの50%を使い敵全体へダメージ(130%×人数)",
		turn: 10,
		proc: [ss_damage_all(ss_consume_all_cond(1.3, 0.5), [1])],
	},
	Lawake: [
		Statusup(400,0),
		Statusup(0,500),
	],
}