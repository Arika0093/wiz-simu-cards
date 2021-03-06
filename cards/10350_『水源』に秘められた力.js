{
	name: "『水源』に秘められた力",
	cardno: 10350,
	imageno: 12739,
	imageno_prefix: "S5zpwx_",
	hp: 2245,
	atk: 4253,
	cost: 54,
	attr: [1,2],
	species: [7],
	islegend: true,
	ape: "コラボ(カードキャプターさくら)",
	is_dist: true,
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃(250%)、5チェインで6回連続攻撃になりさらにダメージアップ(100%)",
		proc: [ChainDualAttack(2.5, 0, 3), ChainDualAttack(3.5, 5, 6)],
	},
	ss1: {
		desc: "<ブースト>3ターンの間、味方のMAXHPを毎ターン15%消費し、味方の攻撃力をアップ(125%)。さらに極稀にクリティカル",
		turn: 6,
		proc: [ss_boost_enhance_all(1.25, 3, 0.5)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Attr_statusup(200,0, [0,1,1,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		NEFTJOD(30),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,100, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 100,0, [0,0,1,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃(350%)、5チェインで6回連続攻撃になりさらにダメージアップ(100%)",
		proc: [ChainDualAttack(3.5, 0, 3), ChainDualAttack(4.5, 5, 6)],
	},
	ss2: {
		desc: "<ブースト>4ターンの間、味方のMAXHPを毎ターン15%消費し、味方の攻撃力をアップ(150%)。さらに極稀にクリティカル",
		turn: 8,
		proc: [ss_boost_enhance_all(1.5, 4, 0.5)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [0,1,0,0,0,]),
	],
}