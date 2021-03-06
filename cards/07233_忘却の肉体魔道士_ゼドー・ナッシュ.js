{
	name: "忘却の肉体魔道士 ゼドー・ナッシュ",
	cardno: 7233,
	imageno: 9255,
	hp: 2004,
	atk: 4500,
	cost: 55,
	attr: [1,2],
	species: [9],
	disable: true,
	islegend: true,
	ape: "追憶のレディアント",
	as1: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(800%)",
		proc: ChainAttack(8.0, 10),
	},
	ss1: {
		desc: "<ブースト>5ターンの間、MAXHPを毎ターン15%消費し、攻撃力をアップ(1200%)。さらに極稀にクリティカル",
		turn: 10,
		proc: [ss_boost_enhance_s(12, 5, 0.15)],
	},
	awakes: [
		Statusup(0,200),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(900%)",
		proc: ChainAttack(9.0, 10),
	},
	ss2: {
		desc: "<ブースト>5ターンの間、MAXHPを毎ターン15%消費し、攻撃力をアップ(1500%)。さらに極稀にクリティカル",
		turn: 13,
		proc: [ss_boost_enhance_s(15, 5, 0.15)],
	},
	Lawake: [
		Statusup(0,1000),
		NEFTJOD(30),
	],
}