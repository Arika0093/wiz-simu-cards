{
	name: "驚天颱風 フウカ・カエラム",
	cardno: 7852,
	imageno: 9910,
	hp: 2745,
	atk: 6213,
	cost: 55,
	attr: [1,-1],
	species: [5],
	disable: true,
	islegend: true,
	ape: "桃娘伝Ⅱ",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、HP50%以上でさらにダメージアップ(300%/500%)",
		proc: [ChainAttack(3.0, 4), add_cond(ChainAttack(5.0, 4), when_hp_more(0.5))],
	},
	ss1: {
		desc: "<特効大魔術>味方全体で1ターン溜めた後、スキル反射を無視し、敵全体へ水属性ダメージ、さらに火属性の敵には特効ダメージ(200%/900%)",
		turn: 3,
		charged: 1,
		isallcharge: true,
		proc: [ss_damage_all(special_attr([1, 0, 0, 0, 0], 9.0, 2.0), [1]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Spec_statusup(500,0, [5,]),
		Spec_statusup(0,500, [5,]),
		Fastskill(3),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、HP50%以上でさらにダメージアップ(400%/600%)",
		proc: [ChainAttack(4.0, 4), add_cond(ChainAttack(6.0, 4), when_hp_more(0.5))],
	},
	ss2: {
		desc: "<特効大魔術>味方全体で1ターン溜めた後、スキル反射を無視し、敵全体へ水属性ダメージ、さらに火属性の敵には特効ダメージ(200%/1300%)",
		turn: 7,
		charged: 1,
		isallcharge: true,
		proc: [ss_damage_all(special_attr([1, 0, 0, 0, 0], 13.0, 2.0), [1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Statusup(0,1000),
		Attr_relief([1,1,1,1,1,],10),
	],
}