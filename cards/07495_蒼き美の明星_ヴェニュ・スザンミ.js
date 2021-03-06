{
	name: "蒼き美の明星 ヴェニュ・スザンミ",
	cardno: 7495,
	imageno: 9623,
	hp: 4134,
	atk: 2456,
	cost: 49,
	attr: [2,3],
	species: [9],
	islegend: true,
	ape: "魔道杯(その他)",
	as1: {
		desc: "<攻撃強化・ガード>3チェインで雷属性の味方の攻撃力をアップ(40%)、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.4, [0,0,1,0,0], 3), as_guard(0.1, [1,1,1,1,1], 3)],
	},
	ss1: {
		desc: "<継続回復>8ターン味方全体を徐々に回復する(20%)",
		turn: 8,
		proc: [ss_regenerate(0.2, 8)],
	},
	awakes: [
		Statusup(0,200),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Heal_afterbattle(10),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<攻撃強化・ガード>3チェインで雷属性の味方の攻撃力をアップ(70%)、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.7, [0,0,1,0,0], 3), as_guard(0.1, [1,1,1,1,1], 3)],
	},
	ss2: {
		desc: "<継続回復>味方全体のHPを完全に回復し、さらに8ターン徐々に回復する(20%)",
		turn: 12,
		proc: [ss_heal(1), ss_regenerate(0.2, 8)],
	},
	Lawake: [
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Attr_statusup(0,100, [0,0,1,0,0,]),
	],
}