{
	name:"雨と雷に打たれた ゼルプスト・V",
	cardno:9939,
	imageno:12288,
	imageno_prefix: "N3zReM_",
	hp:3155,
	atk:3155,
	cost:15,
    attr: [1, 2],
    species: [9],
    islegend: true,
    is_dist: true,
    ape: "周年記念精霊(5周年)",
    as1:{
		desc: "<回復>水属性の味方のHPを回復(3%)、デッキ内の属性が持つ属性数が多いほど、さらに回復(2%)（上限:4段階)",
		proc: [add_cond(Heal(0.03, [0,1,0,0,0], 0), as_deckinattr_num(0, 0.02))],
    },
    ss1:{
		desc: "<状態異常回復>味方全体のHPを回復し、状態異常を回復する(25％)",
		turn: 6,
		proc: [ss_heal(0.25), ss_abstate_cure()],
	},
    awakes:[
		Awake_noeffect("経験値取得量アップ",1),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(3),
		Attr_statusup(0,200, [1,1,1,1,1,]),
		Attr_statusup(200,0, [1,1,1,1,1,]),
		NEFTJOD(30),
		Abstate_invalid("as_sealed"),
    ],
    as2:{
		desc: "<回復>水属性の味方のHPを回復(5%)、デッキ内の属性が持つ属性数が多いほど、さらに回復(2%)（上限:4段階)",
		proc: [add_cond(Heal(0.05, [0,1,0,0,0], 0), as_deckinattr_num(0, 0.02))],
    },
    ss2:{
		desc: "<状態異常回復>味方全体のHPを回復し、状態異常を回復する(25％)",
		turn: 6,
		proc: [ss_heal(0.25), ss_abstate_cure()],
	},
    Lawake:[
		Statusup(0,500),
		Statusup(500,0),
		Attr_statusup(0,100, [1,1,1,1,1,]),
    ]
}