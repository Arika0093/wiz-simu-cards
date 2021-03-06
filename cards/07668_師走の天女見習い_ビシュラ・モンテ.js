{
	name: "師走の天女見習い ビシュラ・モンテ",
	cardno: 7668,
	imageno: 9743,
	hp: 2139,
	atk: 3914,
	cost: 37,
	attr: [0,-1],
	species: [8],
	islegend: true,
	ape: "レイド Gate Defenders 申(さる)ものは追わず。酉(とり)あえずお餅でもどうぞ。",
	is_dist: true,
	as1: {
		desc: "<属性特効>残りHPが80%以上で雷属性の敵単体へ特効ダメージ(475%)",
		proc: add_cond(ChainAttrAttack(4.75, 0, [0,0,1,0,0]), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<回復>味方全体のHPを回復する(25%)",
		turn: 2,
		proc: [ss_heal(0.25)],
	},
	awakes: [
		Fastskill(1),
		Statusup(200,0),
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],1),
		Awake_noeffect("経験値取得量アップ",1),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
	],
	as2: {
		desc: "<属性特効>残りHPが80%以上で雷属性の敵単体へ特効ダメージ(575%)",
		proc: add_cond(ChainAttrAttack(5.75, 0, [0,0,1,0,0]), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<継続回復>3ターン味方全体を徐々に回復する(15%)",
		turn: 6,
		proc: [ss_regenerate(0.15, 3)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(0,400),
	],
}