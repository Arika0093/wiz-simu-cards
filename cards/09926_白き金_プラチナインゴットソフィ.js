{
    name: "白き金 プラチナインゴットソフィ",
    cardno: 9926,
    imageno: 12271,
    hp: 5425,
    atk: 2587,
    cost: 40,
    attr: [1, -1],
    species: [6],
    islegend: true,
    ape: "黒ウィズミュージアム 第2館",
    is_dist: true,
    as1:
    {
        desc: "<攻撃強化・ガード>水属性の味方の攻撃力をアップし(20%)、さらに全属性のダメージを10%軽減",
        proc: [ChainEnhance(0.2, [0, 1, 0, 0, 0], 0), as_guard(0.1, [1, 1, 1, 1, 1], 0)],
    },
    ss1:
    {
        desc: "<鉄壁・極>4ターンの間、攻撃や状態異常攻撃など様々な効果を無効化する(スキル発動中は行動不可)",
        turn: 7,
        proc: [ss_impregnable_all(4)],
    },
    awakes: [
        Panel_boost([0, 1, 0, 0, 0, ], 1),
        Statusup(300, 0),
        Statusup(0, 300),
        Panel_boost([0, 1, 0, 0, 0, ], 2),
        Fastskill(1),
        NEFTJOD(30),
        Fastskill(2),
        Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
        Attr_statusup(200, 0, [0, 1, 0, 0, 0, ]),
        Awake_noeffect("ゴールド取得量アップ", 1)
    ],
    as2:
    {
        desc: "<攻撃強化・ガード>水属性の味方の攻撃力をアップし(40%)、さらに全属性のダメージを10%軽減",
        proc: [ChainEnhance(0.4, [0, 1, 0, 0, 0], 0), as_guard(0.1, [1, 1, 1, 1, 1], 0)],
    },
    ss2:
    {
        desc: "<鉄壁・極>4ターンの間、攻撃や状態異常攻撃など様々な効果を無効化する(スキル発動中は行動不可)",
        turn: 7,
        proc: [ss_impregnable_all(4)],
    },
    Lawake: [
        Statusup(1000, 0),
    ],
}