{
	name: "星々を見渡す大賢 ノイン・ケーラ",
	cardno: 7498,
	imageno: 9541,
	hp: 4120,
	atk: 4567,
	cost: 54,
	attr: [2,-1],
	species: [9],
	disable: true,
	islegend: true,
	ape: "エステレラⅠ",
	as1: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ、解答が早いほどさらにアップ(基本:350%, 3秒台:400%, 2秒台:450%, 1秒台:500%, 0秒台:550%)",
		proc: add_cond(ChainAttrAttack(3.5, 0, [0,1,0,0,0]), as_timedep(0.5)),
	},
	ss1: {
		desc: "<時限大魔術>スキル反射を無視し、3ターン後に敵単体へ雷属性ダメージ(1000%)(上限設置数:5)",
		turn: 2,
		proc: [ss_damage_timebomb(10, [2], 1, 3), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		NEFTJOD(30),
		Statusup(0,200),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([0,0,1,0,0,],10),
		Abstate_invalid("ss_sealed"),
		Awake_noeffect("スキル反射見破り",1),
	],
	as2: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ、解答が早いほどさらにアップ(基本:450%, 3秒台:500%, 2秒台:550%, 1秒台:600%, 0秒台:650%)",
		proc: add_cond(ChainAttrAttack(4.5, 0, [0,1,0,0,0]), as_timedep(0.5)),
	},
	ss2: {
		desc: "<時限大魔術>スキル反射を無視し、3ターン後に敵単体へ雷属性ダメージ(2000%)(上限設置数:5)",
		turn: 3,
		proc: [ss_damage_timebomb(20, [2], 1, 3), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
}