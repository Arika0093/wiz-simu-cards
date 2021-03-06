{
	name: "罰の神炎 ペトラ・リッケ",
	cardno: 7562,
	imageno: 9626,
	hp: 6455,
	atk: 2301,
	cost: 54,
	attr: [0,-1],
	species: [1],
	disable: true,
	islegend: true,
	ape: "イタズラ女神とうさぎのおはなし",
	as1: {
		desc: "<攻撃強化・回復>火属性の味方のHPを回復(13%)、さらに火属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.13, [1,0,0,0,0], 0), ChainEnhance(0.3, [1,0,0,0,0], 0)],
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを1遅らせる",
		turn: 4,
		proc: [ss_delay_all(1)],
	},
	awakes: [
		Costdown(4),
		Panel_boost([1,0,0,0,0,],2),
		Awake_noeffect("経験値取得量アップ",2),
		Fastskill(3),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(300,0, [1,0,0,0,0,]),
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
		Awake_noeffect("心眼",1),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<攻撃強化・回復>火属性の味方のHPを回復(16%)、さらに火属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.16, [1,0,0,0,0], 0), ChainEnhance(0.3, [1,0,0,0,0], 0)],
	},
	ss2: {
		desc: "<遅延>敵全体の攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)],
	},
	Lawake: [
		Abstate_invalid("as_sealed"),
		Statusup(500,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}