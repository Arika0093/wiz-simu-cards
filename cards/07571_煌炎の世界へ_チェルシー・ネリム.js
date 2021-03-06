{
	name: "煌炎の世界へ チェルシー・ネリム",
	cardno: 7571,
	imageno: 7108,
	hp: 3890,
	atk: 2304,
	cost: 46,
	attr: [0,3],
	species: [9],
	islegend: true,
	ape: "チェルシー 舞い降りた異界の姫君",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ、複属性が光属性だとさらにアップ(30%/60%)、リーダー時さらにアップ(20%)",
		proc: [ChainEnhance_SubAttr(0.3, 0.6, [1,0,0,0,0], [0,0,0,1,0], 0), add_cond(ChainEnhance_SubAttr(0.5, 0.8, [1,0,0,0,0], [0,0,0,1,0], 0), when_leader())],
	},
	ss1: {
		desc: "<回復>味方全体のHPを回復する(50%)",
		turn: 4,
		proc: [ss_heal(0.5)],
	},
	awakes: [
		Statusup(0,200),
		Heal_afterbattle(10),
		Fastskill(1),
		Statusup(200,0),
		Costdown(10),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Spec_statusup(0,200, [9,]),
		Spec_statusup(200,0, [9,]),
	],
	as2: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ、複属性が光属性だとさらにアップ(60%/90%)、リーダー時さらにアップ(20%)",
		proc: [ChainEnhance_SubAttr(0.6, 0.9, [1,0,0,0,0], [0,0,0,1,0], 0), add_cond(ChainEnhance_SubAttr(0.8, 1.1, [1,0,0,0,0], [0,0,0,1,0], 0), when_leader())],
	},
	ss2: {
		desc: "<状態異常回復>味方全体のHPを回復し(50%)、状態異常を回復する",
		turn: 8,
		proc: [ss_heal(0.5), ss_abstate_cure()],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}