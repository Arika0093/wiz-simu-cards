{
	name: "波間彩る月の音 ツクヨ・オトエヒナ",
	cardno: 6832,
	imageno: 6810,
	hp: 5112,
	atk: 2020,
	cost: 51,
	attr: [0,1],
	species: [1],
	disable: true,
	islegend: true,
	ape: "八百万神秘譚Ⅱ",
	as1: {
		desc: "<回復>火・水属性の味方を回復、7チェインで更に回復(10%/17%)",
		proc: [Heal(0.10, [1,1,0,0,0], 0), Heal(0.17, [1,1,0,0,0], 7)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体のHPを500アップ(上限値:2000)、さらにHPを回復(50%)",
		turn: 5,
		proc: [ss_statusup_all([500,0], [2000, 2000], -1), ss_heal(0.5)],
	},
	awakes: [
		Fastskill(3),
		Spec_statusup(0,200, [1,]),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Spec_statusup(200,0, [1,]),
		Heal_afterbattle(10),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<回復>火・水属性の味方を回復、7チェインで更に回復(13%/20%)",
		proc: [Heal(0.13, [1,1,0,0,0], 0), Heal(0.20, [1,1,0,0,0], 7)],
	},
	ss2: {
		desc: "<ステータスアップ>味方全体のHPを1000アップ(上限値:2000)、さらにHPを完全回復",
		turn: 8,
		proc: [ss_statusup_all([1000,0], [2000, 2000], -1), ss_heal(1)],
	},
	Lawake: [
		Statusup(700,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		NEFTJOD(30),
	],
}