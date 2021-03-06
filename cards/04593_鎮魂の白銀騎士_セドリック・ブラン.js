{
	name: "鎮魂の白銀騎士 セドリック・ブラン",
	cardno: 4593,
	imageno: 6298,
	hp: 2624,
	atk: 2997,
	cost: 45,
	attr: [2,-1],
	species: [8],
	islegend: true,
	disable: true,
	as1: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ(400%)",
		proc: ChainAttrAttack(4.0, 0, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<ダメージ強化>2ターン雷属性の味方の攻撃力をアップ(40%)",
		turn: 6,
		proc: [ss_enhance_all(0.4, 2, [0,0,1,0,0])],
	},
	awakes: [
		Attr_relief([0,0,1,0,0,],10),
		Fastskill(1),
		Statusup(0,100),
		Statusup(100,0),
		NEFTJOD(30),
		Fastskill(1),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],1),
		Spec_statusup(0,200, [8,]),
		Spec_statusup(200,0, [8,]),
	],
	as2: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ(500%)",
		proc: ChainAttrAttack(5.0, 0, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<ダメージ強化>4ターン雷属性の味方の攻撃力をアップ、リーダー時さらにアップ(50%/70%)",
		turn: 9,
		proc: [ss_enhance_all(ss_when_leader(0.7, 0.5), 2, [0,0,1,0,0])],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
	],
}