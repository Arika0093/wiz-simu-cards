{
	name: "永遠と刹那 レティシア・イニス",
	cardno: 8871,
	imageno: 11080,
	hp: 4916,
	atk: 1056,
	cost: 40,
	attr: [1,4],
	species: [2],
	islegend: false,
	is_dist: true,
	ape: "大魔道杯 in 聖サタニック女学院Ⅱ",
	as1: {
		desc: "<回復>味方全体のHPを回復(13%)",
		proc: Heal(0.13, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<解答削り>解答を見破る",
		turn: 9,
		proc: [ss_answer_foresight()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],1),
		Attr_statusup(0,200,[0,1,0,0,0,]),
		Attr_statusup(200,0,[0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Heal_afterbattle(10),
		Fastskill(4),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,100,[0,0,0,0,1,]),
		Attr_statusup_sattr(100,0,[0,1,0,0,0,],100,0,[0,0,0,0,1,]),
		Fastskill(5),
	],
}