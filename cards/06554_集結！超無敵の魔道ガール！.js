{
	name: "集結！超無敵の魔道ガール！",
	cardno: 6554,
	imageno: 8449,
	hp: 3304,
	atk: 3345,
	cost: 52,
	attr: [0,3],
	species: [9],
	disable: true,
	islegend: true,
	ape: "USG",
	alias: ["まどうがーる"],
	as1: {
		desc: "<チェイン攻撃・複属性攻撃強化>6チェインでダメージアップ(400%)、さらに火属性の攻撃力をアップ、複属性が光だとさらにアップ(10%/40%)",
		proc: [ChainAttack(4.0, 6), ChainEnhance_SubAttr(0.1, 0.4, [1,0,0,0,0], [0,0,0,1,0], 6)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力を500アップ(上限値:2000)、さらにHPを回復(50%)",
		turn: 5,
		proc: [ss_statusup_all([0, 500], [2000, 2000], -1), ss_heal(0.5)],
	},
	awakes: [
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Fastskill(2),
		Attr_statusup_sattr(0, 200, [1,0,0,0,0], 0, 200, [0,0,0,1,0]),
		Attr_statusup_sattr(200, 0, [1,0,0,0,0], 200, 0, [0,0,0,1,0]),
		Awake_noeffect("精霊交替", 1),
	],
	as2: {
		desc: "<チェイン攻撃・複属性攻撃強化>6チェインでダメージアップ(500%)、さらに火属性の攻撃力をアップ、複属性が光だとさらにアップ(10%/40%)",
		proc: [ChainAttack(5.0, 6), ChainEnhance_SubAttr(0.1, 0.4, [1,0,0,0,0], [0,0,0,1,0], 6)],
	},
	ss2: {
		desc: "<ステータスアップ>味方全体の攻撃力を1000アップ(上限値:2000)、さらにHPを完全回復",
		turn: 8,
		proc: [ss_statusup_all([0, 1000], [2000, 2000], -1), ss_heal(1)],
	},
	Lawake: [
		Statusup(0,500),
		Abstate_invalid("as_sealed"),
	],
}