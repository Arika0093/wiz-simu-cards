{
	name: "結成！ グレェェートザッ派",
	cardno: 10063,
	imageno: 10578,
	hp: 7325,
	atk: 1349,
	cost: 58,
	attr: [0,1],
	species: [9],
	islegend: true,
	ape: "アイドルキャッツ！",
	as1: {
		desc: "<回復・複属性攻撃強化>火属性の味方を回復(10%)し、攻撃力もアップ(30%)。複属性が水属性だとさらに攻撃力アップ(30%)",
		proc: [Heal(0.1, [0,1,0,0,0], 0), ChainEnhance_SubAttr(0.3, 0.6, [1,0,0,0,0], [0,1,0,0,0], 0)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを500アップ(上限値:3000)し、さらに味方全体のHPを回復(25%)",
		turn: 5,
		proc: [ss_statusup_all([500, 500], [3000, 3000], -1), ss_heal(0.25)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,100, [0,1,0,0,0,]),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 100,0, [0,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Heal_afterbattle(10),
		Abstate_invalid("heal_reverse"),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,1,0,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,1,0,0,0,]),
		Fastskill(3),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<回復・複属性攻撃強化>火属性の味方を回復(13%)し、攻撃力もアップ(30%)。複属性が水属性だとさらに攻撃力アップ(30%)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), ChainEnhance_SubAttr(0.3, 0.6, [1,0,0,0,0], [0,1,0,0,0], 0)],
	},
	ss2: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを500アップ(上限値:3000)し、さらに味方全体のHPを回復(25%)、Lモードの精霊の数に応じてさらに攻撃力とHPを500アップ",
		turn: 8,
		proc: [ss_statusup_all([ss_legendnum(500, 500), ss_legendnum(500, 500)], [3000, 3000], -1), ss_heal(0.25)],
	},
	Lawake: [
		Attr_statusup(0,300, [1,1,1,1,1,]),
		Abstate_invalid("discharge"),
	],
}