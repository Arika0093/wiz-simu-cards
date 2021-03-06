{
	name: "子を思い黄泉へ引きずり込む アカネ",
	cardno: 8506,
	imageno: 10667,
	hp: 4815,
	atk: 1814,
	cost: 47,
	attr: [1,4],
	species: [1],
	islegend: true,
	ape: "八百万神秘譚Ⅳ",
	is_dist: true,
	as1: {
		desc: "<回復>水属性の味方を回復(8%)、複属性が闇属性だとさらに回復(8%)",
		proc: [Heal(0.08, [0,1,0,0,0], 0), add_cond(Heal(0.16, [0,1,0,0,0], 0), when_subattr_match([0,1,0,0,0], [0,0,0,0,1]))],
	},
	ss1: {
		desc: "<無に還す瞳>味方のMAXHP50%を使い、3ターン後に敵単体を無に還す(一部敵には無効)",
		turn: 7,
		proc: [ss_death_limit(3), ss_consume_all(0.5)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Abstate_invalid("all_sealed"),
		Heal_afterbattle(10),
		Fastskill(1),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,200, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 200,0, [0,0,0,0,1,]),
		Fastskill(2),
	],
	as2: {
		desc: "<回復>水属性の味方を回復(11%)、複属性が闇属性だとさらに回復(8%)",
		proc: [Heal(0.11, [0,1,0,0,0], 0), add_cond(Heal(0.19, [0,1,0,0,0], 0), when_subattr_match([0,1,0,0,0], [0,0,0,0,1]))],
	},
	ss2: {
		desc: "<無に還す瞳>味方のMAXHP50%を使い、2ターン後に敵単体を無に還す(一部敵には無効)",
		turn: 9,
		proc: [ss_death_limit(2), ss_consume_all(0.5)],
	},
	Lawake: [
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,200, [0,0,0,0,1,]),
	],
}