{
	name: "未来からの刺客 <イグノビリウム>",
	cardno: 7065,
	imageno: 9058,
	hp: 2732,
	atk: 2782,
	cost: 43,
	attr: [2,4],
	species: [6],
	islegend: true,
	ape: "ドルキマスⅡ",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(400%)",
		proc: [ChainAttack(4.0, 5)],
	},
	ss1: {
		desc: "<大魔術>1ターン溜めた後、スキル反射を無視し、敵全体へ雷・闇属性のダメージ(250%)",
		turn: 6,
		charged: 1,
		proc: [ss_damage_all(2.5, [2,4]), ss_ignore_skillcounter()],
	},
	awakes: [
		Fastskill(1),
		Statusup(0,200),
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Statusup(200,0),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		NEFTJOD(30),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,200, [0,0,0,0,1,]),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(500%)",
		proc: [ChainAttack(5.0, 5)],
	},
	ss2: {
		desc: "<大魔術>1ターン溜めた後、スキル反射を無視し、敵全体へ雷・闇属性のダメージ(400%)",
		turn: 8,
		charged: 1,
		proc: [ss_damage_all(4.0, [2, 4]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(0,500),
	],
}