{
	name: "せめて、一緒に さやか&杏子",
	cardno: 10421,
	imageno: 12760,
	imageno_prefix: "E4pSBg_",
	hp: 2435,
	atk: 4320,
	cost: 36,
	attr: [1,0],
	species: [9],
	islegend: true,
	ape: "コラボ(魔法少女まどか☆マギカ)",
	as1: {
		desc: "<連撃・回復>敵単体へ6回連続攻撃(250%)、さらに水属性の味方のHPを回復(7%)",
		proc: [ChainDualAttack(2.5, 0, 6), Heal(0.07, [0,1,0,0,0], 0)],
	},
	ss1: {
		desc: "<毒>スキル反射を無視し、6ターン敵全体に毒のダメージを与える(40000)",
		turn: 5,
		proc: [poison(40000, 6), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(3),
		Awake_noeffect("経験値取得量アップ",2),
		Attr_statusup_subattr(500, 0),
		NEFTJOD(30),
		Abstate_invalid(["poison", "attr_weaken", "death_limit", "all_sealed"]),
		Attr_statusup_subattr(0, 500),
	],
	as2: {
		desc: "<連撃・回復>敵単体へ6回連続攻撃(350%)、さらに水属性の味方のHPを回復(10%)",
		proc: [ChainDualAttack(3.5, 0, 6), Heal(0.10, [0,1,0,0,0], 0)],
	},
	ss2: {
		desc: "<毒>スキル反射を無視し、9ターン敵全体に毒のダメージを与える(55000)",
		turn: 9,
		proc: [poison(55000, 9), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,2000),
	],
}