{
	name: "黄昏mareless サンセット＝リフィル",
	cardno: 10068,
	imageno: 12426,
	imageno_prefix: "Ut5EsG_",
	hp: 3835,
	atk: 4071,
	cost: 63,
	attr: [2,3],
	species: [9],
	islegend: true,
	ape: "黄昏メアレスⅣ",
	as1: {
		desc: "<攻撃・回復>敵単体へのダメージアップ(250%)、さらに雷属性の味方のHPを回復(7%)",
		proc: [ChainAttack(2.5, 0), Heal(0.07, [0,0,1,0,0], 0)],
	},
	ss1: {
		desc: "<蓄積解放大魔術・聖>スキル反射を無視し、敵全体へ光属性のダメージ(100%)、さらにクエスト中の累積回復量に応じてダメージアップ(上限値:25万回復で7000%)",
		turn: 10,
		proc: [ss_accumulateDamageOfHeal_all(70.0, 250000, [3]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [0,0,0,1,0,]),
		Fastskill(5),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid("ss_sealed"),
		Fastskill(5),
		Heal_afterbattle(20),
	],
	as2: {
		desc: "<攻撃・回復>敵単体へのダメージアップ(350%)、さらに雷属性の味方のHPを回復(10%)",
		proc: [ChainAttack(3.5, 0), Heal(0.10, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<蓄積解放大魔術・聖>スキル反射を無視し、敵全体へ光属性のダメージ(100%)、さらにクエスト中の累積回復量に応じてダメージアップ(上限値:25万回復で7000%)",
		turn: 10,
		proc: [ss_accumulateDamageOfHeal_all(70.0, 250000, [3]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,1000),
	],
}