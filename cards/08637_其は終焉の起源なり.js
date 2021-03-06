{
	name: "其は終焉の起源なり",
	cardno: 8637,
	imageno: 5726,
	hp: 4033,
	atk: 5321,
	cost: 74,
	attr: [0,-1],
	species: [0],
	islegend: true,
	ape: "レイド Blader",
	is_dist: true,
	alias: ["しゅうえん","ラグナロク"],
	as1: {
		desc: "<連撃>5チェインで敵単体を6回連続攻撃、10チェインで更にダメージアップ(450%/800%)",
		proc: [ChainDualAttack(4.5, 5, 6), ChainDualAttack(8.0, 10, 6)],
	},
	ss1: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵全体へ火属性のダメージ(240%×人数)",
		turn: 10,
		proc: [ss_damage_all(ss_consume_all_cond(2.4, 0.5), [0]), ss_ignore_skillcounter()],
	},
	as2: {
		desc: "<連撃>5チェインで敵単体を6回連続攻撃、10チェインで更にダメージアップ(550%/900%)",
		proc: [ChainDualAttack(5.5, 5, 6), ChainDualAttack(9.0, 10, 6)],
	},
	ss2: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵全体へ火属性のダメージ(280%×人数)",
		turn: 12,
		proc: [ss_damage_all(ss_consume_all_cond(2.8, 0.5), [0]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
		Attr_statusup_oattr(400,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(3),
		Attr_statusup(300,0,[1,0,0,0,0,]),
		Attr_statusup(0,300,[1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	Lawake: [
		Statusup(0,1500),
	],
}