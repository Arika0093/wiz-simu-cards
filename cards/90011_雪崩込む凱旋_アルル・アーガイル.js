{
	name: "雪崩込む凱旋 アルル・アーガイル",
	cardno: 90011,
	imageno: 7228,
	hp: 2220,
	atk: 5321,
	cost: 43,
	attr: [0,-1],
	species: [8],
	islegend: true,
	disable: true,
	as1: {
		desc: "<属性特効>雷属性の敵単体へ特効ダメージ、パネルの色が増す度さらにアップ(350%/450%/550%)",
		proc: ChainPanelsAttrAttack(3.5, 4.5, 5.5, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 7,
		proc: [ss_skillboost(2)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Costdown(2),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Statusup(0,200),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(0,200),
		Spec_statusup(0,200, [8,]),
		Panel_boost([1,0,0,0,0,],2),
	],
	as2: {
		desc: "<属性特効>雷属性の敵単体へ特効ダメージ、パネルの色が増す度さらにアップ(450%/550%/650%)",
		proc: ChainPanelsAttrAttack(4.5, 5.5, 6.5, [0,0,1,0,0], 0),
	},
	ss2: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを2早め、敵全体の行動ターンを2遅らせる",
		turn: 9,
		proc: [ss_skillboost(2), ss_delay_all(2)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}