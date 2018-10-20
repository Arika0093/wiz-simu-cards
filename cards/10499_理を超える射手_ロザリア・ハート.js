{
	name: "理を超える射手 ロザリア・ハート",
	cardno: 10499,
	imageno: 12920,
	hp: 4005,
	atk: 4185,
	cost: 65,
	attr: [2,3],
	species: [8],
	islegend: true,
	ape: "MARELESS2 夢現の狭間",
	as1: {
		desc: "<回復・複属性攻撃強化>雷属性の味方を回復(10%)し、攻撃力もアップ(30%)。複属性を持つ精霊はさらにアップ(20%)",
		proc: [Heal(0.10, [0,0,1,0,0], 0), ChainEnhance_SubAttr(0.3, 0.5, [0,0,1,0,0], [1,1,0,1,1], 0)],
	},
	ss1: {
		desc: "<蓄積解放大魔術・聖>スキル反射を無視し、敵単体へ光属性のダメージ(100%)、さらにクエスト中の累積回復量に応じてダメージアップ(上限値:25万回復で14000%)",
		turn: 10,
		proc: [ss_accumulateDamageOfHeal_s(140.0, 250000, [3], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Fastskill(5),
		Fastskill(5),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid("ss_sealed"),
		Heal_afterbattle(20),
		Awake_noeffect("魔剣弓〈夢現の射手〉",1),	//敵を5体倒すたびに、4ターンの間、自分の攻撃力をアップ(効果値:25)
	],
	as2: {
		desc: "<回復・複属性攻撃強化>雷属性の味方を回復(13%)し、攻撃力もアップ(30%)。複属性を持つ精霊はさらにアップ(20%)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), ChainEnhance_SubAttr(0.3, 0.5, [0,0,1,0,0], [1,1,0,1,1], 0)],
	},
	ss2: {
		desc: "<蓄積解放大魔術・聖>スキル反射を無視し、敵単体へ光属性のダメージ(100%)、さらにクエスト中の累積回復量に応じてダメージアップ(上限値:25万回復で14000%)",
		turn: 10,
		proc: [ss_accumulateDamageOfHeal_s(140.0, 250000, [3], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
	],
}