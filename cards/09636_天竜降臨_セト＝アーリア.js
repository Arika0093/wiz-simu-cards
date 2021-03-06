{
	name: "天竜降臨 セト＝アーリア",
	cardno: 9636,
	imageno: 11912,
	hp: 2325,
	atk: 3422,
	cost: 47,
	attr: [0,2],
	species: [0],
	islegend: true,
	ape: "黒ウィズチャレンジ",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃・ガード>5チェインで敵単体へのダメージアップ(400%)、さらに全属性のダメージを5%軽減",
		proc: [ChainAttack(4.0, 5), as_guard(0.05, [1,1,1,1,1], 5)],
	},
	ss1: {
		desc: "<大魔術>1ターン溜めた後、スキル反射を無視し、敵全体へ火・雷属性のダメージ(600%)",
		turn: 10,
		charged: 1,
		proc: [ss_damage_all(6.0, [0,2]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		Attr_relief([0,0,0,0,1,],30),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,200, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 200,0, [0,0,1,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃・ガード>5チェインで敵単体へのダメージアップ(500%)、さらに全属性のダメージを5%軽減",
		proc: [ChainAttack(5.0, 5), as_guard(0.05, [1,1,1,1,1], 5)],
	},
	ss2: {
		desc: "<大魔術>1ターン溜めた後、スキル反射を無視し、敵全体へ火・雷属性のダメージ(750%)",
		turn: 13,
		charged: 1,
		proc: [ss_damage_all(7.5, [0,2]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1500),
	],
}