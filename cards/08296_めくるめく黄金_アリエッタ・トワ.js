{
	name: "めくるめく黄金 アリエッタ・トワ",
	cardno: 8296,
	imageno: 10444,
	hp: 2455,
	atk: 6745,
	cost: 57,
	attr: [1,-1],
	species: [9],
	disable: true,
	islegend: true,
	ape: "GW2017",
	as1: {
		desc: "<属性特効>4チェインで火属性の敵単体へ特効ダメージ(600%)、リーダー時さらにダメージアップ(150%)",
		proc: [ChainAttrAttack(6.0, 4, [1, 0, 0, 0, 0]), add_cond(ChainAttrAttack(7.5, 4, [1, 0, 0, 0, 0]), when_leader())],
	},
	ss1: {
		desc: "<純属性大魔術>スキル反射を無視し、敵全体へ水属性のダメージ、水単色の精霊が多いほどダメージアップ(上限値:1500%)",
		turn: 7,
		proc: [ss_damage_all(ss_pureattr_cond(15), [1]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Panel_boost([0,1,0,0,0,],2),
		Abstate_invalid("heal_reverse"),
		Fastskill(3),
		Spec_statusup(0,200, [9,]),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Abstate_invalid(["poison", "attr_weaken", "death_limit", "all_sealed"]),
	],
	as2: {
		desc: "<属性特効>4チェインで火属性の敵単体へ特効ダメージ(700%)、リーダー時さらにダメージアップ(150%)",
		proc: [ChainAttrAttack(7.0, 4, [1, 0, 0, 0, 0]), add_cond(ChainAttrAttack(8.5, 4, [1, 0, 0, 0, 0]), when_leader())],
	},
	ss2: {
		desc: "<純属性大魔術>スキル反射を無視し、敵全体へ水属性のダメージ、水単色の精霊が多いほどダメージアップ(上限値:1800%)",
		turn: 10,
		proc: [ss_damage_all(ss_pureattr_cond(18), [1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,200, [0,1,0,0,0,]),
	],
}