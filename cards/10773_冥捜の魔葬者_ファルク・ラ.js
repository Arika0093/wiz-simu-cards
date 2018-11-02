﻿{
	name: "冥捜の魔葬者 ファルク・ラ",
	cardno: 10773,
	imageno: 13228,
	hp: 2345,
	atk: 8341,
	cost: 56,
	attr: [0,-1],
	species: [2],
	islegend: true,
	ape: "喰牙RISE3",
	as1: {
		desc: "<属性特効>味方のMAXHP10%を使い、雷属性の敵単体へ特効ダメージ(850%)、10チェインでさらに特効ダメージ(750%)",
		proc: [add_cond(ChainAttrAttack(8.5, 0, [0,0,1,0,0]),as_consume_all(0.10)), add_cond(ChainAttrAttack(16.0, 10, [0,0,1,0,0]), as_consume_all(0.10))],
	},
	ss1: {
		desc: "<蓄積解放大魔術・破>敵全体へ火属性のダメージ(100%)、さらにクエスト中の解答で与える累積オーバーダメージ量に応じてダメージアップ(上限値:60万オーバーダメージで7000%)(※協力バトル及び一部クエストは無効)",
		turn: 5,
		proc: [ss_accumulateDamageOfOverkill_all(70,600000,[0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Fastskill(5),
		Panel_boost([1,0,0,0,0,],2),
		Abstate_invalid("discharge"),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
		Attr_statusup_oattr(400,0, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<属性特効>味方のMAXHP10%を使い、雷属性の敵単体へ特効ダメージ(950%)、10チェインでさらに特効ダメージ(750%)",
		proc: [add_cond(ChainAttrAttack(9.5, 0, [0,0,1,0,0]),as_consume_all(0.10)), add_cond(ChainAttrAttack(17.0, 10, [0,0,1,0,0]), as_consume_all(0.10))],
	},
	ss2: {
		desc: "<蓄積解放大魔術・破>敵全体へ火属性のダメージ(100%)、さらにクエスト中の解答で与える累積オーバーダメージ量に応じてダメージアップ(上限値:60万オーバーダメージで7000%)(※協力バトル及び一部クエストは無効)",
		turn: 5,
		proc: [ss_accumulateDamageOfOverkill_all(70,600000,[0])],
	},
	Lawake: [
		Statusup(0,2000),
	],
}