{
	name: "南国バーチャルシンガー ミク&ルカ",
	cardno: 8026,
	imageno: 6630,
	hp: 3610,
	atk: 3239,
	cost: 53,
	attr: [1,0],
	species: [9],
	islegend: true,
	ape: "コラボ(ミク)",
	as1: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃(450%)",
		proc: ChainDualAttack(4.5, 5, 3),
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを1早め、3チェインを消費しさらに1早める",
		turn: 5,
		proc: [ss_chain_cost_skill(3, ss_skillboost(2), ss_skillboost(1))],
	},
	as2: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃(550%)",
		proc: ChainDualAttack(5.5, 5, 3),
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキル発動ターンを2早め、3チェインを消費しさらに1早める",
		turn: 8,
		proc: [ss_chain_cost_skill(3, ss_skillboost(3), ss_skillboost(2))],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200,[1,1,0,0,0,]),
		Attr_statusup(200,0,[1,1,0,0,0,]),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,300,[1,0,0,0,0,]),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,300,[1,0,0,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	Lawake: [
		Statusup(500,0),
		Statusup(0,1000),
		NEFTJOD(30),
	],
}