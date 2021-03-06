{
	name: "輝く永劫の翼 アルドベリク・ゴドー",
	cardno: 7133,
	imageno: 6867,
	hp: 3664,
	atk: 3176,
	cost: 53,
	attr: [2,3],
	species: [2],
	disable: true,
	islegend: true,
	ape: "ロストエデンⅠ",
	as1: {
		desc: "<種族特効>4チェインでダメージアップ、魔族の敵へさらにダメージアップ(400%/600%)",
		proc: [ChainAttack(4.0, 4), ChainSpecAttack(6.0, 4, [2])],
	},
	ss1: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを2早め、敵単体の攻撃ターンを2遅らせる",
		turn: 9,
		proc: [ss_skillboost(2), ss_delay_s(2)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Statusup(0,200),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,200, [0,0,0,1,0,]),
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Attr_statusup_sattr(200,0, [0,0,1,0,0,], 200,0, [0,0,0,1,0,]),
		Fastskill(2),
		Spec_statusup(0,200, [2,3,]),
	],
	as2: {
		desc: "<種族特効>4チェインでダメージアップ、魔族の敵へさらにダメージアップ(500%/700%)",
		proc: [ChainAttack(5.0, 4), ChainSpecAttack(7.0, 4, [2])],
	},
	ss2: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを3早め、敵単体の攻撃ターンを3遅らせる",
		turn: 12,
		proc: [ss_skillboost(3), ss_delay_s(3)],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,500),
	],
}