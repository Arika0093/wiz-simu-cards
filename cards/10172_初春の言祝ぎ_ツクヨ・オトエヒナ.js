{
	name: "初春の言祝ぎ ツクヨ・オトエヒナ",
	cardno: 10172,
	imageno: 9771,
	hp: 4050,
	atk: 4798,
	cost: 55,
	attr: [1,-1],
	species: [1],
	islegend: true,
	ape: "謹賀新年2017",
	as1: {
		desc: "<属性特効>5チェインで火属性の敵単体へ特効ダメージ(700%)",
		proc: ChainAttrAttack(7.0, 5, [1,0,0,0,0]),
	},
	ss1: {
		desc: "<ブースト>味方全体で1ターン溜めた後、8ターンの間、味方のMAXHPを毎ターン15%消費し、味方の攻撃力をアップ(200%)。さらに極稀にクリティカル",
		turn: 8,
		charged: 1,
		isallcharge: true,
		proc: [ss_boost_enhance_all(2.0, 8, 0.15, [1,1,1,1,1])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Fastskill(4),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Spec_statusup(500,0, [1,]),
		Spec_statusup(0,500, [1,]),
		NEFTJOD(30),
		Awake_Chainboost(1),
		Abstate_invalid("as_sealed"),
		Fastskill(4),
	],
	as2: {
		desc: "<属性特効>5チェインで火属性の敵単体へ特効ダメージ(800%)",
		proc: ChainAttrAttack(8.0, 5, [1,0,0,0,0]),
	},
	ss2: {
		desc: "<ブースト>味方全体で1ターン溜めた後、8ターンの間、味方のMAXHPを毎ターン15%消費し、味方の攻撃力をアップ(200%)。さらに極稀にクリティカル",
		turn: 8,
		charged: 1,
		isallcharge: true,
		proc: [ss_boost_enhance_all(2.0, 8, 0.15, [1,1,1,1,1])],
	},
	Lawake: [
		Attr_relief([1,0,0,0,0,],10),
		Statusup(0,500),
		Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
}