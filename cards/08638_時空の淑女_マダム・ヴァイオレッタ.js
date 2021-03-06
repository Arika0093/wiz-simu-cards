{
	name: "時空の淑女 マダム・ヴァイオレッタ",
	cardno: 8638,
	imageno: 10812,
	hp: 2305,
	atk: 2903,
	cost: 42,
	attr: [2,0],
	species: [9],
	islegend: true,
	ape: "エタクロⅠ",
	is_dist: true,
	as1: {
		desc: "<分散攻撃>敵全体へ分散攻撃(250%)",
		proc: ChainVarianceAttack(2.5, 0),
	},
	ss1: {
		desc: "<割合削り>敵単体のHPを20%減少させる、10チェインを消費しスキル反射を無視する",
		turn: 7,
		proc: [ss_ratiodamage_s(0.2), ss_chain_cost_skill(10, ss_ignore_skillcounter(), null)],
	},
	awakes: [
		Costdown(10),
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Fastskill(4),
		Awake_noeffect("ゴールド取得量アップ",2),
	],
	as2: {
		desc: "<分散攻撃>敵全体へ分散攻撃(350%)",
		proc: ChainVarianceAttack(3.5, 0),
	},
	ss2: {
		desc: "<割合削り>敵単体のHPを30%減少させる、10チェインを消費しスキル反射を無視する",
		turn: 9,
		proc: [ss_ratiodamage_s(0.3), ss_chain_cost_skill(10, ss_ignore_skillcounter(), null)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(0,500),
	],
}