{
	name: "未知なる来訪者 瓜転永理",
	cardno: 6754,
	imageno: 8711,
	hp: 2480,
	atk: 5902,
	cost: 52,
	attr: [0,-1],
	species: [8],
	disable: true,
	islegend: true,
	ape: "真夏のグレート・クイズ・ウォー",
	alias: ["うりまろびえり"],
	as1: {
		desc: "<属性特効>	5チェインで雷属性の敵単体へ特効ダメージ(350%)、解答が早いほどさらにアップ(150%)",
		proc: [add_cond(ChainAttrAttack(3.5, 5, [0,0,1,0,0]), as_timedep(1.5))],
	},
	ss1: {
		desc: "<特効大魔術>敵単体へ火属性のダメージ(400%)、平均解答時間が早いほどさらに雷属性の敵には特効ダメージ(200%)",
		turn: 4,
		proc: [ss_damage_s(special_attr([0,0,1,0,0], ss_answertime(4,2), 4), [0], 1)],
	},
	awakes: [
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
	],
	as2: {
		desc: "<属性特効>5チェインで雷属性の敵単体へ特効ダメージ(450%)、解答が早いほどさらにアップ(150%)",
		proc: [add_cond(ChainAttrAttack(4.5, 5, [0,0,1,0,0]), as_timedep(1.5))],
	},
	ss2: {
		desc: "<特効大魔術>敵単体へ火属性のダメージ(800%)、平均解答時間が早いほどさらに雷属性の敵には特効ダメージ(200%)",
		turn: 6,
		proc: [ss_damage_s(special_attr([0,0,1,0,0], ss_answertime(8,2), 8), [0], 1)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}