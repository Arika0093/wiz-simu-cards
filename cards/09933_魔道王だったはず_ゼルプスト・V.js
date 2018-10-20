{
	name:"魔道王だったはず ゼルプスト・V",
	cardno:9933,
	imageno:12282,
	imageno_prefix: "N3zReM_",
	hp:4555,
	atk:4555,
	cost:5,
    attr: [1, -1],
    species: [9],
    islegend: true,
    is_dist: true,
    ape: "周年記念精霊(5周年)",
    as1:{
		desc:"<攻撃強化>水属性の味方の攻撃力をアップし(30%)、解答が早いほどさらにアップ(10%)",
		proc:add_cond(ChainEnhance(0.3, [0,1,0,0,0], 0), as_timedep(0.1)),
    },
    ss1:{
		desc: "<融合強化>デッキ内の精霊が持つ属性数が多いほど、水属性の味方の攻撃力、HPのステータスをアップ(上限値:2000,2000)",
		turn: 4,
		proc: [ss_statusup_all([ss_multiattr_cond(2000), ss_multiattr_cond(2000)], [2000,2000], -1, [0,1,0,0,0])],
    },
    awakes:[
		Awake_noeffect("経験値取得量アップ",1),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Abstate_invalid("ss_sealed"),
		Fastskill(4),
		Attr_statusup(0,200, [1,1,1,1,1,]),
		Attr_statusup(200,0, [1,1,1,1,1,]),
		NEFTJOD(30),
		Abstate_invalid("as_sealed"),
    ],
    as2:{
		desc:"<攻撃強化>水属性の味方の攻撃力をアップし(60%)、解答が早いほどさらにアップ(10%)",
		proc:add_cond(ChainEnhance(0.6, [0,1,0,0,0], 0), as_timedep(0.1)),
    },
    ss2:{
		desc: "<融合強化>デッキ内の精霊が持つ属性数が多いほど、水属性の味方の攻撃力、HPのステータスをアップ(上限値:3000,3000)",
		turn: 8,
		proc: [ss_statusup_all([ss_multiattr_cond(3000), ss_multiattr_cond(3000)], [3000,3000], -1, [0,1,0,0,0])],
    },
    Lawake:[
		Statusup(0,500),
		Statusup(500,0),
		Attr_statusup(0,100, [1,1,1,1,1,]),
    ]
}