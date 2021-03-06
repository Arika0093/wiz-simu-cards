{
	name: "超速の戦姫 ヴィクトリア・ネルド",
	cardno: 6290,
	imageno: 8137,
	hp: 3067,
	atk: 5505,
	cost: 60,
	attr: [2,-1],
	species: [8],
	disable: true,
	islegend: true,
	ape: "DL限定精霊",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、HP80%以上でさらにダメージアップ(300%/550%)",
		proc: [ChainAttack(3.0, 4), add_cond(ChainAttack(5.5, 4), when_hp_more(0.8))],
	},
	ss1: {
		desc: "<ブースト>5ターンの間、MAXHPを毎ターン15%消費し、攻撃力をアップ(1200%)。さらに極稀にクリティカル",
		turn: 10,
		proc: [ss_boost_enhance_s(12, 5, 0.15)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],3),
		Statusup(0,200),
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],3),
		NEFTJOD(30),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],3),
		Fastskill(2),
		Awake_noeffect("ドロップアップ", 1),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、HP80%以上でさらにダメージアップ(400%/650%)",
		proc: [ChainAttack(4.0, 4), add_cond(ChainAttack(6.5, 4), when_hp_more(0.8))],
	},
	ss2: {
		desc: "<ブースト>5ターンの間、MAXHPを毎ターン15%消費し、攻撃力をアップ(1500%)。さらに極稀にクリティカル",
		turn: 13,
		proc: [ss_boost_enhance_s(15, 5, 0.15)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [0,0,1,0,0,]),
	],
}