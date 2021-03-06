{
	name: "汚れた水の王 ヴィロムコ",
	cardno: 7217,
	imageno: 9229,
	hp: 3513,
	atk: 2971,
	cost: 50,
	attr: [1,4],
	species: [0],
	disable: true,
	islegend: true,
	ape: "レイド Soul of Kings",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化・回復>5チェインで水属性の味方を回復(10%)し、攻撃力もアップ、複属性が闇属性だとさらに攻撃力アップ(30%/70%)",
		proc: [Heal(0.10, [0,1,0,0,0], 5), ChainEnhance_SubAttr(0.3, 0.7, [0,1,0,0,0], [0,0,0,0,1], 5)],
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],1),
		Attr_relief([0,0,0,1,0,],10),
		Statusup(200,0),
		Statusup(0,200),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 100,0, [0,0,0,0,1,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化・回復>5チェインで水属性の味方を回復(10%)し、攻撃力もアップ、複属性が闇属性だとさらに攻撃力アップ(60%/100%)",
		proc: [Heal(0.10, [0,1,0,0,0], 5), ChainEnhance_SubAttr(0.6, 1.0, [0,1,0,0,0], [0,0,0,0,1], 5)],
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,500),
	],
}