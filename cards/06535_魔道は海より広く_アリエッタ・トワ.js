{
	name: "魔道は海より広く アリエッタ・トワ",
	cardno: 6535,
	imageno: 8429,
	hp: 3547,
	atk: 4856,
	cost: 52,
	attr: [2,-1],
	species: [9],
	disable: true,
	islegend: true,
	ape: "USG",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、10チェインで更にダメージアップ(350%/550%)",
		proc: [ChainAttack(3.5, 4), ChainAttack(5.5, 10)],
	},
	ss1: {
		desc: "<残滅大魔術>敵全体へ雷属性のダメージ(300%)、さらに4ターンの間、雷属性のダメージ(300%)",
		turn: 11,
		proc: [ss_continue_damage(3.0, 3.0, [2], 4)],
	},
	awakes: [
		Statusup(0,200),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Fastskill(1),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Fastskill(2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、10チェインで更にダメージアップ(450%/650%)",
		proc: [ChainAttack(4.5, 4), ChainAttack(6.5, 10)],
	},
	ss2: {
		desc: "<残滅大魔術>敵全体へ雷属性のダメージ(400%)、さらに5ターンの間、雷属性のダメージ(400%)",
		turn: 13,
		proc: [ss_continue_damage(4.0, 4.0, [2], 5)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(500,0),
	],
}