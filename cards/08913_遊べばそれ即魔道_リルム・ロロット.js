{
	name: "遊べばそれ即魔道 リルム・ロロット",
	cardno: 8913,
	imageno: 11124,
	hp: 3315,
	atk: 6745,
	cost: 52,
	attr: [0,-1],
	species: [9],
	islegend: true,
	ape: "ゴールデンアワード2017",
	as1: {
		desc: "<連撃>敵単体を8回連続攻撃(150%)、デッキに単色の精霊が多いほど、ダメージがアップ(70%)（上限:5段階)",
		proc: add_cond(ChainDualAttack(1.5, 0, 8), as_singleattr_num(0, 0.7)),
	},
	as2: {
		desc: "<連撃>敵単体を8回連続攻撃(250%)、デッキに単色の精霊が多いほど、ダメージがアップ(70%)（上限:5段階)",
		proc: add_cond(ChainDualAttack(2.5, 0, 8), as_singleattr_num(0, 0.7)),
	},
	ss1: {
		desc: "<連鎖解放大魔術>スキル反射を無視し、ターン終了時に敵全体へ火属性のダメージ(100%)、すべてのチェインを消費して、消費した数に応じてさらにダメージアップ(上限値:30チェインで3300%) ",
		turn: 8,
		proc: [ss_burst_attack(1.0, 33.0, 30, [0], 1, ss_ignore_skillcounter())],
	},
	ss2: {
		desc: "<連鎖解放大魔術>スキル反射を無視し、ターン終了時に敵全体へ火属性のダメージ(200%)、すべてのチェインを消費して、消費した数に応じてさらにダメージアップ(上限値:30チェインで4200%)",
		turn: 11,
		proc: [ss_burst_attack(2.0, 42.0, 30, [0], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],4),
		Attr_statusup_oattr(0,400,[1,0,0,0,0,]),
		Attr_statusup_oattr(400,0,[1,0,0,0,0,]),
		NEFTJOD(30),
		Awake_noeffect("経験値取得量アップ",2),
		Abstate_invalid("ss_sealed"),
		Fastskill(3),
		Attr_statusup(0,400,[1,0,0,0,0,]),
		Attr_statusup(400,0,[1,0,0,0,0,]),
		Awake_noeffect("選ばれし者の証",1),
	],
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,200,[1,0,0,0,0,]),
	],
}