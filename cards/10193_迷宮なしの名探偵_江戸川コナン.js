{
	name: "迷宮なしの名探偵 江戸川コナン",
	cardno: 10193,
	imageno: 6929,
	hp: 3613,
	atk: 2521,
	cost: 46,
	attr: [2,1],
	species: [8],
	islegend: true,
	is_dist: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<回復・攻撃強化>雷属性の味方のHPを回復(12%)、さらに雷属性の味方の攻撃力をアップ(20%)",
		proc: [Heal(0.12, [0,0,1,0,0], 0), ChainEnhance(0.2, [0,0,1,0,0], 0)],
	},
	ss1: {
		desc: "<チェインガード>3ターンの間、チェインを保護する",
		turn: 5,
		proc: [ss_chain_protect(2)],
	},
	awakes: [
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],1),
		Awake_noeffect("経験値取得量アップ", 1),
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Attr_statusup(200,0, [0,1,1,0,0,]),
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,200, [0,1,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 200,0, [0,1,0,0,0,]),
		Awake_noeffect("ゴールド取得量アップ", 1),
		Panel_boost([0,0,1,0,0,],2),
	],
	as2: {
		desc: "<回復・攻撃強化>雷属性の味方のHPを回復(14%)、さらに雷属性の味方の攻撃力をアップ(20%)",
		proc: [Heal(0.14, [0,0,1,0,0], 0), ChainEnhance(0.2, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(1000,0),
	],
}