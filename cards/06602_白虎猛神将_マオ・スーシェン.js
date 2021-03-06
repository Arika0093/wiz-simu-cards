{
	name: "白虎猛神将 マオ・スーシェン",
	cardno: 6602,
	imageno: 8669,
	hp: 3011,
	atk: 5542,
	cost: 53,
	attr: [2,-1],
	species: [1],
	islegend: true,
	ape: "黄昏の四神書",
	as1: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃(350%)",
		proc: ChainDualAttack(3.5, 3, 3),
	},
	ss1: {
		desc: "<ブースト>4ターンの間、味方のMAXHPを毎ターン15%消費し、味方の攻撃力をアップ(100%)。さらに極稀にクリティカル",
		turn: 5,
		proc: [ss_boost_enhance_all(1.0, 4, 0.15)],
	},
	awakes: [
		Statusup(0,100),
		Panel_boost([0,0,1,0,0,],1),
		Attr_relief([1,0,0,0,0,],10),
		Statusup(0,200),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
		Spec_statusup(0,200, [1,]),
		Spec_statusup(200,0, [1,]),
	],
	as2: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃(450%)",
		proc: ChainDualAttack(4.5, 3, 3),
	},
	ss2: {
		desc: "<ブースト>4ターンの間、味方のMAXHPを毎ターン15%消費し、味方の攻撃力をアップ(150%)。さらに極稀にクリティカル",
		turn: 7,
		proc: [ss_boost_enhance_all(1.5, 4, 0.15)],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
}