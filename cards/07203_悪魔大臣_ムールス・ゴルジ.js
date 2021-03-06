{
	name: "悪魔大臣 ムールス・ゴルジ",
	cardno: 7203,
	imageno: 9217,
	hp: 2832,
	atk: 2909,
	cost: 45,
	attr: [2,4],
	species: [2],
	islegend: true,
	ape: "ロストエデンⅡ WWMF",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が闇属性だとさらにアップ(30%/80%)",
		proc: ChainEnhance_SubAttr(0.3, 0.8, [0,0,1,0,0], [0,0,0,0,1], 0),
	},
	ss1: {
		desc: "<残滅大魔術>敵全体へ雷属性のダメージ(200%)、さらに3ターンの間、雷属性のダメージ(200%)",
		turn: 7,
		proc: [ss_continue_damage(2.0, 2.0, [2], 3)],
	},
	awakes: [
		NEFTJOD(30),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(1),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Statusup(0,300),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Spec_statusup(400,0, [2,]),
		Fastskill(2),
		Spec_statusup(0,400, [2,]),
	],
	as2: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が闇属性だとさらにアップ(60%/110%)",
		proc: ChainEnhance_SubAttr(0.6, 1.1, [0,0,1,0,0], [0,0,0,0,1], 0),
	},
	ss2: {
		desc: "<残滅大魔術>敵全体へ雷属性のダメージ(300%)、さらに3ターンの間、雷属性のダメージ(300%)",
		turn: 9,
		proc: [ss_continue_damage(3.0, 3.0, [2], 3)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(0,400),
	],
}