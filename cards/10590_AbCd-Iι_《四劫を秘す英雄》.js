{
	name: "AbCd-Iι: 《四劫を秘す英雄》",
	cardno: 10590,
	imageno: 10298,
	hp: 2125,
	atk: 5005,
	cost: 61,
	attr: [2,3],
	species: [11],
	islegend: true,
	ape: "新人王",
	alias: ["ミルドレッド"],
	as1: {
		desc: "<属性特効連撃・複属性攻撃強化>水・闇属性の敵単体へ特効3連撃(300%)、さらに雷属性の攻撃力をアップ(10%)、複属性を持つ精霊はさらにアップ(30%)",
		proc: [ChainDualAttrAttack(3.0, 0, 3, [0,1,0,0,1]), ChainEnhance_SubAttr(0.1, 0.4, [0,0,1,0,0], [1,1,0,1,1], 0)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ雷・光属性のダメージ(120%)",
		turn: 4,
		proc: [ss_damage_all(1.2, [2,3]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		NEFTJOD(60),
		Attr_relief([0,0,0,1,1,],30),
		Fastskill(3),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<属性特効連撃・複属性攻撃強化>水・闇属性の敵単体へ特効3連撃(400%)、さらに雷属性の攻撃力をアップ(10%)、複属性を持つ精霊はさらにアップ(30%)",
		proc: [ChainDualAttrAttack(4.0, 0, 3, [0,1,0,0,1]), ChainEnhance_SubAttr(0.1, 0.4, [0,0,1,0,0], [1,1,0,1,1], 0)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ雷・光属性のダメージ(200%)。HP20%以下の時、さらにダメージアップ(2000%)し、味方全体のHPを完全回復",
		turn: 6,
		proc: [ss_damage_all(ss_hp_less(0.2, 22.0, 2.0), [2,3]), ss_hp_less_skill(0.2, ss_heal(1)), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1500),
		Attr_relief([0,1,0,0,0,],20),
	],
}