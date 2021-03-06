{
	name: "幻想氷土の黒羽 サギリ・ヒイラギ",
	cardno: 3991,
	imageno: 5672,
	hp: 2139,
	atk: 2922,
	cost: 37,
	attr: [1,-1],
	species: [4],
	islegend: true,
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ、パネルの色が増すたびさらにアップ(225%/300%/450%)",
		proc: ChainPanelsAttack(2.25, 3.0, 4.5, 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・水属性化",
		turn: 6,
		proc: [ss_panel_change([1,1,0,0,0])],
	},
	awakes: [
		Statusup(0,200),
		Fastskill(1),
		Statusup(0,200),
		Statusup(0,200),
		Statusup(200,0),
		Costdown(2),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],1),
		Fastskill(2),
		Spec_statusup(0,200, [3,4,]),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ、パネルの色が増すたびさらにアップ(325%/400%/550%)",
		proc: ChainPanelsAttack(3.25, 4.0, 5.5, 0),
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 8,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	Lawake: [
		Statusup(0,400),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
}