{
	name: "ぬくもりを胸に ピノ・マリアンヌ",
	cardno: 9870,
	imageno: 9721,
	hp: 5760,
	atk: 2103,
	cost: 56,
	attr: [1,3],
	species: [9],
	islegend: true,
	ape: "Christmas2016",
	as1: {
		desc: "<回復・攻撃強化>水属性の味方のHPを回復(13%)、さらに水属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), ChainEnhance(0.3, [0,1,0,0,0], 0)],
	},
	ss1: {
		desc: "<ガード>3ターン闇属性のダメージを50%軽減する",
		turn: 5,
		proc: [ss_attr_guard([0,0,0,0,1], 0.5, 3)],
	},
	awakes: [
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Awake_noeffect("経験値取得量アップ",2),
		Heal_afterbattle(10),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [0,0,0,1,0,]),
		Fastskill(4),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,200, [0,0,0,1,0,]),
		Abstate_invalid("ss_sealed"),
		Awake_noeffect("スキル反射見破り",1),
	],
	as2: {
		desc: "<回復・攻撃強化>水属性の味方のHPを回復(16%)、さらに水属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.16, [0,1,0,0,0], 0), ChainEnhance(0.3, [0,1,0,0,0], 0)],
	},
	ss2: {
		desc: "<ガード>6ターン闇属性のダメージを50%軽減する",
		turn: 9,
		proc: [ss_attr_guard([0,0,0,0,1], 0.5, 6)],
	},
	Lawake: [
		Statusup(1000,0),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		NEFTJOD(30),
	],
}