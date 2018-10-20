{
	name:"貪欲に新しい自分を ゼルプスト・V",
	cardno:9935,
	imageno:12284,
	imageno_prefix: "N3zReM_",
	hp:3155,
	atk:3155,
	cost:15,
    attr: [2, 0],
    species: [9],
    islegend: true,
    is_dist: true,
    ape: "周年記念精霊(5周年)",
    as1:{
		desc: "<連撃>敵単体を3回連続攻撃(200%) 、解答が早いほどさらにアップ(60%)（上限:4段階)",
		proc: add_cond(ChainDualAttack(2.0, 0, 3), as_timedep(0.6)),
    },
    ss1:{
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
    awakes:[
		Awake_noeffect("経験値取得量アップ",1),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Abstate_invalid("ss_sealed"),
		Fastskill(3),
		Attr_statusup(0,200, [1,1,1,1,1,]),
		Attr_statusup(200,0, [1,1,1,1,1,]),
		NEFTJOD(30),
		Abstate_invalid("as_sealed"),
    ],
    as2:{
		desc: "<連撃>敵単体を3回連続攻撃(300%) 、解答が早いほどさらにアップ(60%)（上限:4段階)",
		proc: add_cond(ChainDualAttack(3.0, 0, 3), as_timedep(0.6)),
    },
    ss2:{
		desc: "<パネル変換>ジャンルパネルをALL属性化し、ダメージ25%軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([1,1,1,0,0]), panel_attr_guard([1,1,1,1,1], 0.25)]
	},
    Lawake:[
		Statusup(0,500),
		Statusup(500,0),
		Attr_statusup(0,100, [1,1,1,1,1,]),
    ]
}