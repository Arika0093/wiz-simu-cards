{
	name: "柑橘系くのいち ミカン･カラタチ",
	cardno: 5661,
	imageno: 7459,
	hp: 3227,
	atk: 3831,
	cost: 38,
	attr: [2,-1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<属性特効連撃>水属性の敵単体へ特効3連続ダメージ、パネルの色が増す度さらにアップ(350%/450%/550%)",
		proc: ChainPanelsAttrDualAttack(3.5, 4.5, 5.5, [0, 1, 0, 0, 0], 3, 0),
	},
	ss1: {
		desc: "<多弾魔術>敵単体へ雷属性の10回連続ダメージ(100%)",
		turn: 4,
		proc: [ss_damage_s(1.0, [2], 10)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(1),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Awake_noeffect("経験値取得量アップ", 1),
		Awake_noeffect("ゴールド取得量アップ", 5),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
		Statusup(200,0),
		Spec_statusup(0,300, [8,]),
	],
	as2: {
		desc: "<属性特効連撃>水属性の敵単体へ特効3連続ダメージ、パネルの色が増す度さらにアップ(450%/550%/650%)",
		proc: ChainPanelsAttrDualAttack(4.5, 5.5, 6.5, [0, 1, 0, 0, 0], 3, 0),
	},
	ss2: {
		desc: "<多弾魔術>敵単体へ雷属性の10回連続ダメージ(380%)",
		turn: 8,
		proc: [ss_damage_s(3.8, [2], 10)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(500,0),
	],
}