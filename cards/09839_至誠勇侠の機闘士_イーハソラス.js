{
	name: "至誠勇侠の機闘士 イーハソラス",
	cardno: 9839,
	imageno: 12182,
	hp: 1455,
	atk: 4984,
	cost: 30,
	attr: [0,-1],
	species: [6],
	islegend: true,
	ape: "眠れる遺跡のアウトランダー",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(350%)、10チェインで更にダメージアップ(200%)",
		proc: [ChainAttack(3.5, 4), ChainAttack(5.5, 10)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵単体へ無属性のダメージ(1600%)",
		turn: 9,
		proc: [ss_damage_s(16, [-1], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Attr_statusup(300,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(1),
		Attr_relief([1,1,1,1,1,],10),
		Attr_relief([0,0,0,1,1,],10),
		Fastskill(2),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(450%)、10チェインで更にダメージアップ(200%)",
		proc: [ChainAttack(4.5, 4), ChainAttack(6.5, 10)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵単体へ無属性のダメージ(2000%)",
		turn: 12,
		proc: [ss_damage_s(20, [-1], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		NEFTJOD(30),
	],
}