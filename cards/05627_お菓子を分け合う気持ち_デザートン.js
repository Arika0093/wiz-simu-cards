{
	name: "お菓子を分け合う気持ち デザートン",
	cardno: 5627,
	imageno: 7381,
	hp: 2537,
	atk: 2135,
	cost: 49,
	attr: [0,4],
	species: [4],
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃(400%)",
		proc: ChainDualAttack(4.0, 5, 3),
	},
	ss1: {
		desc: "<ダメージ強化>味方全体のMAXHPの50%を使い、2ターン自分の攻撃力をアップ(500%)",
		turn: 9,
		proc: [ss_enhance_own(5.0, 2), ss_consume_all(0.5)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		NEFTJOD(30),
		Statusup(200,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Statusup(0,200),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃(500%)",
		proc: ChainDualAttack(5.0, 5, 3),
	},
	ss2: {
		desc: "<ダメージ強化>味方全体のMAXHPの50%を使い、2ターン自分の攻撃力をアップ(1000%)",
		turn: 13,
		proc: [ss_enhance_own(10.0, 2), ss_consume_all(0.5)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Attr_relief([0,0,1,0,0,],10),
	],
}