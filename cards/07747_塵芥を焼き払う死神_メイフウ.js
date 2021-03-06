{
	name: "塵芥を焼き払う死神 メイフウ",
	cardno: 7747,
	imageno: 9829,
	hp: 4356,
	atk: 4321,
	cost: 54,
	attr: [0,-1],
	species: [1],
	disable: true,
	islegend: true,
	ape: "魔轟三鉄傑 対 地獄三十六歌仙",
	as1: {
		desc: "<回復>火属性の味方を回復、10チェインで更に回復(9%/19%)",
		proc: [Heal(0.09, [1,0,0,0,0], 0), Heal(0.19, [1,0,0,0,0], 10)],
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 12,
		proc: [ss_latest_copy()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(300,0, [1,0,0,0,0,]),
		Awake_secondfast(5),
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
		Panel_boost([1,0,0,0,0,],2),
		Spec_statusup(500,0, [1,]),
		Spec_statusup(0,500, [1,]),
		Heal_afterbattle(10),
		Awake_secondfast(5),
	],
	as2: {
		desc: "<回復>火属性の味方を回復、10チェインで更に回復(12%/22%)",
		proc: [Heal(0.12, [1,0,0,0,0], 0), Heal(0.22, [1,0,0,0,0], 10)],
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 12,
		proc: [ss_latest_copy()],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
		NEFTJOD(30),
	],
}