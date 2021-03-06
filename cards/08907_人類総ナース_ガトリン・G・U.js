{
	name: "人類総ナース ガトリン・G・U",
	cardno: 8907,
	imageno: 11118,
	hp: 3505,
	atk: 3741,
	cost: 57,
	attr: [0,1],
	species: [8],
	islegend: true,
	ape: "ゴールデンアワード2017",
	as1: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(10%)、複属性が水属性だとさらにアップ(90%)",
		proc: ChainEnhance_SubAttr(0.1, 1.0, [1,0,0,0,0], [0,1,0,0,0], 0),
	},
	as2: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ(40%)、複属性が水属性だとさらにアップ(90%)",
		proc: ChainEnhance_SubAttr(0.4, 1.3, [1,0,0,0,0], [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ火・水属性のダメージ(120%)",
		turn: 4,
		proc: [ss_damage_all(1.2, [0,1]), ss_ignore_skillcounter()],
	},
	ss2: {
		desc: "<複属性ダメージ強化>4ターンの間、火属性の攻撃力をアップ(50%)、複属性が水属性だとさらにアップ(100%)",
		turn: 8,
		proc: [ss_enhance_all_subattr(0.5, 1.5, 4, [1,0,0,0,0], [0,1,0,0,0])],
	},
	awakes: [
		Fastskill(4),
		Panel_boost([1,0,0,0,0,],4),
		Attr_statusup(0,200,[1,1,0,0,0,]),
		Attr_statusup(200,0,[1,1,0,0,0,]),
		Fastskill(4),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Attr_statusup_sattr(0,100,[1,0,0,0,0,],0,300,[0,1,0,0,0,]),
		Attr_statusup_sattr(100,0,[1,0,0,0,0,],300,0,[0,1,0,0,0,]),
		Awake_damage_multiple(1.1, 500),
		Awake_noeffect("選ばれし者の証",1),
	],
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,200,[1,1,0,0,0,]),
	],
}