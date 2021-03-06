{
	name: "旋風と聖なる巫女 ロレッタ&オルネ",
	cardno: 9055,
	imageno: 11262,
	hp: 3325,
	atk: 5333,
	cost: 44,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "大魔道杯 感謝",
	is_dist: true,
	as1: {
		desc: "<属性特効連撃>水属性の敵単体へ特効5連撃(400%)",
		proc: ChainDualAttrAttack(4.0, 0, 5, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<純属性大魔術>スキル反射を無視し、敵全体へ雷属性のダメージ、雷単色の精霊が多いほどダメージアップ(上限値:1300%)",
		turn: 8,
		proc: [ss_damage_all(ss_pureattr_cond(13), [2]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		Attr_statusup_oattr(300,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Attr_relief([1,0,0,0,0,],0),
		Attr_relief([1,1,1,1,1,],20),
		Attr_statusup(0,300, [0,0,1,0,0,]),
		Attr_statusup(300,0, [0,0,1,0,0,]),
		Fastskill(3),
	],
	as2: {
		desc: "<属性特効連撃>水属性の敵単体へ特効5連撃(500%)",
		proc: ChainDualAttrAttack(5.0, 0, 5, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<純属性大魔術>スキル反射を無視し、敵全体へ雷属性のダメージ、雷単色の精霊が多いほどダメージアップ(上限値:1600%)",
		turn: 11,
		proc: [ss_damage_all(ss_pureattr_cond(16), [2]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1500),
	],
}