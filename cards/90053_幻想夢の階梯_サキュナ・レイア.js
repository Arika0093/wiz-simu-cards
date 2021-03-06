{
	name: "幻想夢の階梯 サキュナ・レイア",
	cardno: 90053,
	imageno: 6589,
	hp: 2183,
	atk: 4567,
	cost: 42,
	attr: [2,-1],
	species: [2],
	islegend: true,
	as1: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ(400%)",
		proc: [ChainAttrAttack(4.0, 0, [0,1,0,0,0])],
	},
	ss1: {
		desc: "<自己犠牲魔術>MAXHPの50%を使い、敵全体へ雷属性のダメージ(150%)",
		turn: 4,
		proc: [ss_damage_all(1.5, [2]), ss_consume_own(0.5)],
	},
	awakes: [
		Statusup(200,0),
		Statusup(0,200),
		Statusup(0,200),
		Costdown(4),
		Fastskill(1),
		Fastskill(2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Spec_statusup(0,200, [2,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ(500%)",
		proc: [ChainAttrAttack(5.0, 0, [0,1,0,0,0])],
	},
	ss2: {
		desc: "<自己犠牲魔術>MAXHPの50%を使い、敵全体へ雷属性のダメージ(220%)",
		turn: 6,
		proc: [ss_damage_all(2.2, [2]), ss_consume_own(0.5)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [0,0,1,0,0,]),
	],
}