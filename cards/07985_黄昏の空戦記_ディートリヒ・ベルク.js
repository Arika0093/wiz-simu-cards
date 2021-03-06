{
	name: "黄昏の空戦記 ディートリヒ・ベルク",
	cardno: 7985,
	imageno: 7097,
	hp: 2001,
	atk: 4651,
	cost: 57,
	attr: [1,2],
	species: [8],
	alias: ["元帥"],
	islegend: true,
	ape: "謹賀新年2016",
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃、6チェインで更にダメージアップ(250%/500%)",
		proc: [ChainDualAttack(2.5, 0, 3), ChainDualAttack(5.0, 6, 3)],
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ水属性のダメージ、さらに火属性の敵には特効ダメージ(400%/950%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([1,0,0,0,0], 9.5, 4), [1])],
	},
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃、6チェインで更にダメージアップ(350%/600%)",
		proc: [ChainDualAttack(3.5, 0, 3), ChainDualAttack(6.0, 6, 3)],
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ水属性のダメージ、さらに火属性の敵には特効ダメージ(400%/1450%)",
		turn: 9,
		proc: [ss_damage_all(special_attr([1,0,0,0,0], 14.5, 4), [1])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup(0,200,[0,1,1,0,0,]),
		Attr_statusup(200,0,[0,1,1,0,0,]),
		NEFTJOD(30),
		Fastskill(1),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,300,[0,0,1,0,0,]),
		Attr_statusup_sattr(100,0,[0,1,0,0,0,],300,0,[0,0,1,0,0,]),
		Fastskill(2),
		Attr_relief([1,1,1,1,1,],20),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	Lawake: [
		Attr_statusup(0,200,[0,1,1,0,0,]),
		Statusup(0,1000),
	],
}