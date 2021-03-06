{
	name: "聖刻忠魔 エイミー・キャロル",
	cardno: 8642,
	imageno: 10816,
	hp: 3655,
	atk: 1539,
	cost: 37,
	attr: [2,4],
	species: [2],
	islegend: true,
	ape: "エタクロⅡ",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ(30%)、複属性が闇属性だとさらにアップ(40%)",
		proc: ChainEnhance_SubAttr(0.3, 0.7, [0,0,1,0,0], [0,0,0,0,1], 0),
	},
	ss1: {
		desc: "<状態異常回復>味方全体の状態異常を回復する",
		turn: 4,
		proc: [ss_abstate_cure()],
	},
	awakes: [
		Costdown(10),
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Heal_afterbattle(10),
		Fastskill(3),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,200, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 200,0, [0,0,0,0,1,]),
	],
	as2: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ(60%)、複属性が闇属性だとさらにアップ(40%)",
		proc: ChainEnhance_SubAttr(0.6, 1.0, [0,0,1,0,0], [0,0,0,0,1], 0),
	},
	ss2: {
		desc: "<状態異常回復>味方全体のHPを回復し(50%)、状態異常を回復する",
		turn: 8,
		proc: [ss_heal(0.5), ss_abstate_cure()],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Abstate_invalid("as_sealed"),
	],
}