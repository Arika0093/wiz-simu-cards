{
	name: "菓子道極めし女傑 ムウマ・ホルスト",
	cardno: 7962,
	imageno: 10075,
	hp: 3021,
	atk: 4311,
	cost: 45,
	attr: [1,-1],
	species: [9],
	islegend: true,
	ape: "大魔道杯 in ショコラフォレスト",
	is_dist: true,
	as1: {
		desc: "<属性特効>5チェインで火属性の敵単体に特効ダメージ(650%)",
		proc: ChainAttrAttack(6.5, 5, [1,0,0,0,0]),
	},
	ss1: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵全体へ水属性のダメージ(200%×人数)",
		turn: 10,
		proc: [ss_damage_all(ss_consume_all_cond(2.0, 0.5), [1]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],1),
		Statusup(300,0),
		Statusup(0,300),
		Attr_statusup(300,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,300, [0,1,0,0,0,]),
		Fastskill(2),
		Attr_relief([0,1,1,0,0,],20),
		Abstate_invalid("ss_sealed"),
		Fastskill(2),
	],
	as2: {
		desc: "<属性特効>5チェインで火属性の敵単体に特効ダメージ(750%)",
		proc: ChainAttrAttack(7.5, 5, [1,0,0,0,0]),
	},
	ss2: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵全体へ水属性のダメージ(240%×人数)",
		turn: 12,
		proc: [ss_damage_all(ss_consume_all_cond(2.4, 0.5), [1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}