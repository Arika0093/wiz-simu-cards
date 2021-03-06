{
	name: "震電親衛隊長 エーファ・ベルツ",
	cardno: 6420,
	imageno: 8359,
	hp: 2589,
	atk: 4310,
	cost: 42,
	attr: [2,-1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ、HP80%以上でさらにダメージアップ(250%/500%)",
		proc: [ChainAttack(2.5, 3), add_cond(ChainAttack(5.0, 3), when_hp_more(0.8))],
	},
	ss1: {
		desc: "<ダメージ強化>3ターン雷属性の味方の攻撃力をアップ(50%)",
		turn: 7,
		proc: [ss_enhance_all(0.5, 3, [0,0,1,0,0])],
	},
	awakes: [
		Costdown(4),
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,200),
		Statusup(300,0),
		Spec_statusup(0,200, [8,]),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Attr_statusup(100,0, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ、HP80%以上でさらにダメージアップ(350%/600%)",
		proc: [ChainAttack(3.5, 3), add_cond(ChainAttack(6.0, 3), when_hp_more(0.8))],
	},
	ss2: {
		desc: "<ダメージ強化>4ターン雷属性の味方の攻撃力をアップ、5チェインを消費しさらにアップ(120%/180%)",
		turn: 12,
		proc: [ss_enhance_all(ss_chain_cost(5, 1.8, 1.2), 4, [0,0,1,0,0])],
	},
	Lawake: [
		Statusup(0,400),
		Statusup(400,0),
	],
}