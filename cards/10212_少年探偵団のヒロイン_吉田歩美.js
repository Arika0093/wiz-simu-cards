{
	name: "少年探偵団のヒロイン 吉田歩美",
	cardno: 10212,
	imageno: 6986,//ss
	hp: 5462,
	atk: 2545,
	cost: 40,
	attr: [2,-1],
	species: [8],
	islegend: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<回復>雷属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを1早め、敵全体の行動ターンを1遅らせる",
		turn: 6,
		proc: [ss_skillboost(1), ss_delay_all(1)],
	},
	as2: {
		desc: "<回復>雷属性の味方のHPを回復(15%)",
		proc: Heal(0.15, [0,0,1,0,0], 0),
	},
	ss2: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを2早め、敵全体の行動ターンを2遅らせる",
		turn: 9,
		proc: [ss_skillboost(2), ss_delay_all(2)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Awake_noeffect("経験値取得量アップ",1),
		Heal_afterbattle(10),
		Attr_statusup_oattr(0,400,[0,0,1,0,0,]),
		Attr_statusup_oattr(400,0,[0,0,1,0,0,]),
		Attr_statusup(0,400,[0,0,1,0,0,]),
		NEFTJOD(30),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(3),
		Attr_statusup(400,0,[0,0,1,0,0,]),
	],
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}