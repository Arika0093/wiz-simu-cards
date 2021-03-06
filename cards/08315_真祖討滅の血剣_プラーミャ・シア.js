{
	name: "真祖討滅の血剣 プラーミャ・シア",
	cardno: 8315,
	imageno: 5681,
	hp: 3342,
	atk: 3630,
	cost: 55,
	attr: [0,4],
	species: [8],
	disable: true,
	islegend: true,
	ape: "GW2015",
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(350%)、パネルの色が増す度ダメージアップ(100%、250%)",
		proc: ChainPanelsAttack(3.5, 4.5, 7.0, 3),
	},
	ss1: {
		desc: "<ガード>3ターン全属性のダメージを25%軽減する",
		turn: 5,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 3)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		NEFTJOD(30),
		Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,0,0,0,1,]),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 200,0, [0,0,0,0,1,]),
		Fastskill(4),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(450%)、パネルの色が増す度ダメージアップ(100%、250%)",
		proc: ChainPanelsAttack(4.5, 5.5, 8.0, 3),
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50%軽減する、3チェインを消費しさらに1ターン軽減",
		turn: 9,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, ss_chain_cost(3, 4, 3))],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		NEFTJOD(30),
	],
}