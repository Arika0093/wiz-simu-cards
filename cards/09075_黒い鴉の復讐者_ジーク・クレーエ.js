{
	name: "黒い鴉の復讐者 ジーク・クレーエ",
	cardno: 9075,
	imageno: 11317,
	hp: 2745,
	atk: 7044,
	cost: 54,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "ドルキマスⅢ",
	as1: {
		desc: "<属性特効>15チェインで水属性の敵単体へ特効ダメージ(1950%)",
		proc: ChainAttrAttack(19.5, 15, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<激化大魔術>敵単体へ雷属性の3回連続ダメージ(800%)、発動する度に効果値が2倍アップ(上限:3段階)",
		turn: 11,
		proc: [ss_damage_s(ss_intenselyval(0, 8.0, 64), [2], 3)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_oattr(0,400, [0,0,1,0,0,]),
		Attr_statusup_oattr(400,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Awake_secondfast(4),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Awake_secondfast(5),
		Awake_Chainboost(1),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<属性特効>15チェインで水属性の敵単体へ特効ダメージ(2050%)",
		proc: ChainAttrAttack(20.5, 15, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<激化大魔術>敵単体へ雷属性の3回連続ダメージ(800%)、発動する度に効果値が2倍アップ(上限:3段階)",
		turn: 11,
		proc: [ss_damage_s(ss_intenselyval(0, 8.0, 64), [2], 3)],
	},
	Lawake: [
		Statusup(0,1500),
		NEFTJOD(30),
	],
}