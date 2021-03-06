{
	name: "黎明の竜霊神 アニマ・アウローラ",
	cardno: 7381,
	imageno: 7696,
	hp: 4024,
	atk: 2710,
	cost: 42,
	attr: [0,-1],
	species: [0],
	islegend: true,
	ape: "神竜降臨Ⅱ",
	is_dist: true,
	as1: {
		desc: "<回復>火属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)],
	},
	awakes: [
		Costdown(10),
		Panel_boost([1,0,0,0,0,],2),
		Statusup(200,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Spec_statusup(0,400, [0,]),
		Spec_statusup(400,0, [0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<攻撃強化・回復>火属性の味方のHPを回復(14%)、さらに火属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.14, [1,0,0,0,0], 0), ChainEnhance(0.3, [1,0,0,0,0], 0)],
	},
	ss2: {
		desc: "<遅延>敵全体の攻撃ターンを2遅らせ、3チェインを消費しさらに1遅らせる",
		turn: 10,
		proc: [ss_delay_all(ss_chain_cost(3, 3, 2))],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(400,0),
	],
}