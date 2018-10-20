{
	name: "主の夢のために ルシーニア・レメディ",
	cardno: 10514,
	imageno: 12935,
	hp: 2505,
	atk: 7740,
	cost: 54,
	attr: [0,-1],
	species: [8],
	islegend: true,
	ape: "MARELESS2 夢現の狭間",
	as1: {
		desc: "<連撃>敵単体を6回連続攻撃(250%) 、解答が早いほどさらにアップ(70%)（上限:4段階)",
		proc: add_cond(ChainDualAttack(2.5, 0, 6), as_timedep(0.7)),
	},
	ss1: {
		desc: "<パネル爆破大魔術>スキル反射を無視し、パネルを消費(一部の特殊なパネルを除く)し、消費したパネルの属性の数だけ敵全体へダメージ(200%)",
		turn: 5,
		proc: [ss_PanelBurningDamage_all(2)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Fastskill(4),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
		Attr_statusup_oattr(400,0, [1,0,0,0,0,]),
		Awake_damage_multiple(1.1, 500),
		Awake_noeffect("刺突剣〈インジェクター〉",1),	//敵を15体倒すたびに、1ターンの間、チェインを保護する
	],
	as2: {
		desc: "<連撃>敵単体を6回連続攻撃(350%) 、解答が早いほどさらにアップ(70%)（上限:4段階)",
		proc: add_cond(ChainDualAttack(3.5, 0, 6), as_timedep(0.7)),
	},
	ss2: {
		desc: "<パネル爆破大魔術>スキル反射を無視し、パネルを消費(一部の特殊なパネルを除く)し、消費したパネルの属性の数だけ敵全体へダメージ(500%)",
		turn: 8,
		proc: [ss_PanelBurningDamage_all(5)],
	},
	Lawake: [
		Statusup(0,1500),
		Abstate_invalid("ss_sealed"),
	],
}