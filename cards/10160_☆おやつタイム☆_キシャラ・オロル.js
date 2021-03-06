{
	name: "☆おやつタイム☆ キシャラ・オロル",
	cardno: 10160,
	imageno: 12527,
	hp: 2895,
	atk: 3965,
	cost: 56,
	attr: [1,0],
	species: [9],
	islegend: true,
	ape: "ゴールデン2018",
	as1: {
		desc: "<連撃・複属性攻撃強化>敵単体を3回連続攻撃(250%)、さらに水属性の攻撃力をアップ(10%)、複属性が火属性だとさらにアップ(30%)",
		proc: [ChainDualAttack(2.5, 0, 3), ChainEnhance_SubAttr(0.1, 0.4, [0,1,0,0,0], [1,0,0,0,0], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・水属性化",
		turn: 3,
		proc: [ss_panel_change([1,1,0,0,0])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,100, [1,0,0,0,0,]),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 100,0, [1,0,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(1),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [1,0,0,0,0,]),
		Fastskill(2),
		NEFTJOD(30),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<連撃・複属性攻撃強化>敵単体を3回連続攻撃(350%)、さらに水属性の攻撃力をアップ(10%)、複属性が火属性だとさらにアップ(30%)",
		proc: [ChainDualAttack(3.5, 0, 3), ChainEnhance_SubAttr(0.1, 0.4, [0,1,0,0,0], [1,0,0,0,0], 0)],
	},
	ss2: {
		desc: "<統一パネル変換>ジャンルパネルを火・水属性化し、攻撃力アップの効果を付与、〈主属性:水、複属性:火〉の精霊が多いほどさらに効果値アップ(400%)",
		turn: 7,
		proc: [ss_panel_change([1,1,0,0,0]), panel_attackup(ss_matchattr_cond(4.0, [0,1,0,0,0], [1,0,0,0,0]))],
	},
	Lawake: [
		Abstate_invalid("discharge"),
		Statusup(0,1000),
		Statusup(500,0),
	],
}