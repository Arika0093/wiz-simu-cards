{
	name: "覇劫の不死鳥キャラ クドラくん",
	cardno: 7162,
	imageno: 9148,
	hp: 2328,
	atk: 3511,
	cost: 36,
	attr: [0,-1],
	species: [2],
	islegend: true,
	ape: "ロストエデンⅡ WWMF",
	is_dist: true,
	as1: {
		desc: "<属性特効>雷属性の敵単体へ特効ダメージ(350%)",
		proc: ChainAttrAttack(3.5, 0, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(100%/250%)",
		turn: 4,
		proc: [ss_damage_all(special_attr([0,0,1,0,0], 2.5, 1.0), [0])],
	},
	awakes: [
		Awake_noeffect("経験値取得量アップ",1),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<属性特効>雷属性の敵単体へ特効ダメージ(450%)",
		proc: ChainAttrAttack(4.5, 0, [0,0,1,0,0]),
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(100%/350%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([0,0,1,0,0], 3.5, 1.0), [0])],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(0,500),
	],
}