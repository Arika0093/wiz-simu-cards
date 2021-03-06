{
	name: "プレミオな和歌の神 ミコト",
	cardno: 4343,
	imageno: 6099,
	hp: 3101,
	atk: 1743,
	cost: 48,
	attr: [1, 0],
	species: [1],
	disable: true,
	awakes: [
		Fastskill(1),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
		Heal_afterbattle(10),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		NEFTJOD(30),
		Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(200, 0, [1, ]),
		Spec_statusup(0, 200, [1, ]),
		Spec_statusup(200, 0, [1, ]),
	],
	as1: {
		desc: "<回復>火・水属性の味方を回復、7チェインで更に回復(通常：10％ / 7チェイン：17％)",
		proc: [Heal(0.10, [1,1,0,0,0], 0), Heal(0.17, [1,1,0,0,0], 7)],
	},
	ss1: {
		desc: "<継続回復>3ターン味方全体を徐々に回復する(15％×3T)",
		turn: 5,
		proc: [ss_regenerate(0.15, 3)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>火・水属性の味方を回復、7チェインで更に回復(通常：13％ / 7チェイン：20％)",
		proc: [Heal(0.13, [1,1,0,0,0], 0), Heal(0.20, [1,1,0,0,0], 7)],
	},
	ss2: {
		desc: "<継続回復>味方全体のHPを回復する、さらに5ターン徐々に回復する(回復：35％ / 徐々に回復：15％×5T)",
		turn: 9,
		proc: [ss_heal(0.35), ss_regenerate(0.15, 5)],
	},
}