{
	name: "前刻の蒼神 イレーナ・フリエル",
	cardno: 8704,
	imageno: 5419,
	hp: 7576,
	atk: 3021,
	cost: 56,
	attr: [1,-1],
	species: [1],
	islegend: true,
	ape: "エタクロⅠ",
	as1: {
		desc: "<回復・攻撃強化>味方全体のHPを回復(13%)、さらに水属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), ChainEnhance(0.3, [0,1,0,0,0], 0)],
	},
	as2: {
		desc: "<回復・攻撃強化>味方全体のHPを回復(16%)、さらに水属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.16, [0,1,0,0,0], 0), ChainEnhance(0.3, [0,1,0,0,0], 0)],
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)],
	},
	ss2: {
		desc: "<遅延>敵全体の攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(0,400,[0,1,0,0,0,]),
		Attr_statusup_oattr(400,0,[0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Abstate_invalid(["poison", "attr_weaken", "death_limit", "all_sealed"]),
		Fastskill(4),
		Attr_statusup(0,400,[0,1,0,0,0,]),
		Attr_statusup(400,0,[0,1,0,0,0,]),
		Awake_noeffect("行動見破り",1),
	],
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,200,[0,1,0,0,0,]),
		NEFTJOD(30),
	],
}