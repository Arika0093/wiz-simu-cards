{
	name: "聖サタニック女学院",
	cardno: 9893,
	imageno: 12242,
	hp: 4025,
	atk: 2126,
	cost: 45,
	attr: [0,1],
	species: [2],
	islegend: true,
	ape: "英雄凱旋大魔道杯",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(30%)、複属性が水属性だとさらにアップ(40%)",
		proc: [ChainEnhance_SubAttr(0.3, 0.7, [1,0,0,0,0], [0,1,0,0,0], 0)],
	},
	ss1: {
		desc: "<一閃斬撃大魔術>5ターン溜めた後、スキル反射を無視し、敵全体へ火属性のダメージ(850%)、さらに攻撃した敵の数が多いほどチェインプラス(上限:5体、最大31チェイン)",
		turn: 5,
		charged: 5,
		proc: [ss_damage_slash_all(8.5, [0]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		Statusup(0,200),
		Statusup(200,0),
		Fastskill(2),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(60%)、複属性が水属性だとさらにアップ(40%)",
		proc: [ChainEnhance_SubAttr(0.6, 1.0, [1,0,0,0,0], [0,1,0,0,0], 0)],
	},
	ss2: {
		desc: "<一閃斬撃大魔術>5ターン溜めた後、スキル反射を無視し、敵全体へ火属性のダメージ(850%)、さらに攻撃した敵の数が多いほどチェインプラス(上限:5体、最大31チェイン)",
		turn: 5,
		charged: 5,
		proc: [ss_damage_slash_all(8.5, [0]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(1000,0),
	],
}