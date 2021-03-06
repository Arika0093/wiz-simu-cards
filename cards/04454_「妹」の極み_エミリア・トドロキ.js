{
	name: "「妹」の極み エミリア・トドロキ",
	cardno: 4454,
	imageno: 6147,
	hp: 3238,
	atk: 2662,
	cost: 48,
	attr: [0, -1],
	species: [9],
	disable: true,
	awakes: [
		Costdown(2),
		Statusup(0, 200),
		Statusup(200, 0),
		Costdown(4),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(2),
		Spec_statusup(0, 200, [9]),
		Spec_statusup(200, 0, [9]),
	],
	as1: {
		desc: "<回復>味方全員のHPを回復、術士はさらに回復(通常：11％ / 術士：16％)",
		proc: multi_as(Heal(0.11, [1, 1, 1, 1, 1]), SpecHeal(0.16, [1, 1, 1, 1, 1], [9])),
	},
	ss1: {
		desc: "<割合削り>敵全体のHPを20％減少させる",
		turn: 9,
		proc: [ss_ratiodamage_all(0.2)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>味方全員のHPを回復、術士はさらに回復(通常：13％ / 術士：18％)",
		proc: multi_as(Heal(0.13, [1, 1, 1, 1, 1]), SpecHeal(0.18, [1, 1, 1, 1, 1], [9])),
	},
	ss2: {
		desc: "<割合削り>味方全体のMAXHPの50％を使い、敵全体のHPを30％減少させる",
		turn: 12,
		proc: [ss_consume_all(0.5), ss_ratiodamage_all(0.3)],
	},
}