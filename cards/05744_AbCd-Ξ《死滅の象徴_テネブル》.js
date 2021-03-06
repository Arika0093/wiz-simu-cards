{
	name: "AbCd-Ξ:《死滅の象徴 テネブル》",
	cardno: 5744,
	imageno: 7497,
	hp: 3050,
	atk: 3520,
	cost: 52,
	attr: [2,3],
	species: [11],
	disable: true,
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<連撃>3チェインでMAXHPの15%を使い、敵単体を3回連続攻撃(400%)",
		proc: add_cond(ChainDualAttack(4.0, 3, 3), as_consume_own(0.15)),
	},
	ss1: {
		desc: "<ステータスアップ>味方全体のHPを1000ダウンし、攻撃力を1000アップ(上限2000)",
		turn: 5,
		proc: [ss_statusup_all([-1000, 1000], [2000, 2000], -1)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(1),
		Statusup(0,200),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Statusup(0,300),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<連撃>3チェインでMAXHPの15%を使い、敵単体を3回連続攻撃(500%)",
		proc: add_cond(ChainDualAttack(5.0, 3, 3), as_consume_own(0.15)),
	},
	ss2: {
		desc: "<特効大魔術>MAXHPを100%使い敵単体へ雷属性のダメージ、さらに水属性の敵には特効ダメージ(300%/1200%)",
		turn: 7,
		proc: [ss_damage_s(special_attr([0, 1, 0, 0, 0], 12.0, 3.0), [2], 1), ss_consume_own(1)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(500,0),
	],
}