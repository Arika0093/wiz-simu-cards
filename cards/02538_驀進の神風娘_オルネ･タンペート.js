{
	name: "驀進の神風娘 オルネ･タンペート",
	cardno: 2538,
	imageno: 4091,
	hp: 2312,
	atk: 2321,
	cost: 40,
	attr: [2,-1],
	species: [9],
	islegend: false,
	is_dist: true,
	as1: {
		desc: "<攻撃強化>雷属性の味方の攻撃力を大幅アップ(30%)",
		proc: ChainEnhance(0.30, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<割合削り>敵単体のHPを25%減少させる",
		turn: 9,
		proc: [ss_ratiodamage_s(0.25)],
	},
	awakes: [
		Costdown(2),
		Fastskill(1),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(0,100),
		NEFTJOD(30),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Fastskill(1),
		Spec_statusup(0,200, [9,]),
	],
}