{
	name: "魔法少女 暁美ほむら",
	cardno: 10425,
	imageno: 12764,
	imageno_prefix: "E4pSBg_",
	hp: 2595,
	atk: 3217,
	cost: 47,
	attr: [1,4],
	species: [9],
	islegend: true,
	ape: "コラボ(魔法少女まどか☆マギカ)",
	is_dist: true,
	as1: {
		desc: "<連撃>5チェインで敵単体を5回連続攻撃(450%)",
		proc: ChainDualAttack(4.5, 5, 5),
	},
	ss1: {
		desc: "<解答時間停止>1ターンの間、解答時間を停止する(一部特殊パネルを除く)(※協力バトル及び一部クエストは無効)",
		turn: 7,
		proc: [ss_astime_ext(20, 1)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],1),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Attr_relief([0,0,0,1,1,],10),
		Awake_noeffect("経験値取得量アップ",1),
		Attr_statusup_subattr(0, 300),
		Attr_statusup_subattr(300, 0),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],1),
		Fastskill(2),
	],
	as2: {
		desc: "<連撃>5チェインで敵単体を5回連続攻撃(550%)",
		proc: ChainDualAttack(5.5, 5, 5),
	},
	ss2: {
		desc: "<解答時間停止>2ターンの間、解答時間を停止する(一部特殊パネルを除く)(※協力バトル及び一部クエストは無効)",
		turn: 10,
		proc: [ss_astime_ext(20, 2)],
	},
	Lawake: [
		Attr_statusup_subattr(0, 200),
		Statusup(0,500),
	],
}