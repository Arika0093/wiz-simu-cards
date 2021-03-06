{
	name: "〈オルタメア〉世界を変える夢",
	cardno: 7355,
	imageno: 9380,
	hp: 4500,
	atk: 2312,
	cost: 42,
	attr: [0,-1],
	species: [2],
	islegend: true,
	ape: "黄昏メアレスⅡ",
	is_dist: true,
	as1: {
		desc: "<攻撃強化・ガード>火属性の味方の攻撃力をアップし(20%)、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.2, [1,0,0,0,0], 0), as_guard(0.1, [1,1,1,1,1], 0)],
	},
	ss1: {
		desc: "<鉄壁・極>4ターンの間、攻撃や状態異常攻撃など様々な効果を無効化する(スキル発動中は行動不可)",
		turn: 7,
		proc: [ss_impregnable_all(4)],
	},
	awakes: [
		Fastskill(1),
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Statusup(200,0),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		NEFTJOD(30),
		Attr_relief([0,0,1,0,0,],10),
	],
	as2: {
		desc: "<攻撃強化・ガード>火属性の味方の攻撃力をアップし(40%)、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.4, [1,0,0,0,0], 0), as_guard(0.1, [1,1,1,1,1], 0)],
	},
	ss2: {
		desc: "<鉄壁・極>4ターンの間、攻撃や状態異常攻撃など様々な効果を無効化する(スキル発動中は行動不可)",
		turn: 7,
		proc: [ss_impregnable_all(4)],
	},
	Lawake: [
		Statusup(400,0),
		Attr_statusup(100,0, [1,0,0,0,0,]),
	],
}