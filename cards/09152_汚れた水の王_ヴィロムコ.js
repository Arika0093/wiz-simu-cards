{
	name: "汚れた水の王 ヴィロムコ",
	cardno: 9152,
	imageno: 9229,
	hp: 3513,
	atk: 3071,
	cost: 51,
	attr: [1,4],
	species: [0],
	islegend: true,
	ape: "レイド Soul of Kings",
	is_dist: true,
	as1: {
		desc: "<回復・複属性攻撃強化>5チェインで水属性の味方を回復(10%)し、攻撃力もアップ(40%)、複属性が闇属性だとさらに攻撃力アップ(50%)",
		proc: [Heal(0.10, [0,1,0,0,0], 5), ChainEnhance_SubAttr(0.4, 0.9, [0,1,0,0,0], [0,0,0,0,1], 5)],
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],1),
		Attr_relief([0,0,0,1,0,],10),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [0,0,0,0,1,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<回復・複属性攻撃強化>5チェインで水属性の味方を回復(10%)し、攻撃力もアップ(70%)、複属性が闇属性だとさらに攻撃力アップ(50%)",
		proc: [Heal(0.10, [0,1,0,0,0], 5), ChainEnhance_SubAttr(0.7, 1.2, [0,1,0,0,0], [0,0,0,0,1], 5)],
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,500),
	],
}