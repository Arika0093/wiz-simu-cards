{
	name: "海と陸を分かつ審判獣 ティアマギス",
	cardno: 9994,
	imageno: 12343,
	hp: 3698,
	atk: 2050,
	cost: 42,
	attr: [1,3],
	species: [1],
	islegend: true,
	ape: "Birth of New Order",
	is_dist: true,
	as1: {
		desc: "<回復>水属性の味方を回復(10%)、5チェインで更に回復(4%)",
		proc: [Heal(0.10, [0,1,0,0,0], 0), Heal(0.14, [0,1,0,0,0], 5)],
	},
	ss1: {
		desc: "<毒>スキル反射を無視し、2ターン敵全体に毒のダメージを与える(1000)",
		turn: 10,
		proc: [poison(1000, 2), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],1),
		Statusup(300,0),
		Statusup(0,300),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(1),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Awake_noeffect("ゴールド取得量アップ",2),
	],
	as2: {
		desc: "<回復>水属性の味方を回復(13%)、5チェインで更に回復(4%)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), Heal(0.17, [0,1,0,0,0], 5)],
	},
	ss2: {
		desc: "<毒>スキル反射を無視し、2ターン敵全体に毒のダメージを与える(3000)",
		turn: 12,
		proc: [poison(3000, 2), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(1000,0),
	],
}