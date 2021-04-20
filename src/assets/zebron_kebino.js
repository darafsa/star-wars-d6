export const stats = [
	{
		name: 'Dexterity',
		dice: 3,
		pips: 0,
		skills: [
			{
				name: 'Lightsaber',
				dice: 1,
				pips: 0,
			},
			{
				name: 'Lightsaber',
				spez: true,
				dice: 2,
				pips: 0,
			},
			{
				name: 'Acrobatics',
				dice: 1,
				pips: 0,
			},
			{
				name: 'Dodge',
				dice: 2,
				pips: 0,
			},
			{
				name: 'Sprinting',
				spez: true,
				dice: 1,
				pips: 0,
			},
		],
	},
	{
		name: 'Perception',
		dice: 3,
		pips: 0,
		skills: [
			{
				name: 'Sneak',
				dice: 1,
				pips: 0,
			},
		],
	},
	{
		name: 'Knowledge',
		dice: 2,
		pips: 0,
		skills: [
			{
				name: 'Cultures',
				dice: 1,
				pips: 0,
			},
		],
	},
	{
		name: 'Strength',
		dice: 3,
		pips: 0,
		skills: [
			{
				name: 'Climbing/Jumping',
				dice: 1,
				pips: 0,
			},
			{
				name: 'Swimming',
				dice: 1,
				pips: 0,
			},
		],
	},
	{
		name: 'Mechanical',
		dice: 2,
		pips: 0,
	},
	{
		name: 'Technical',
		dice: 2,
		pips: 0,
		skills: [
			{
				name: 'Lightsaber Engineering',
				adv: true,
				dice: 1,
				pips: 0,
			},
		],
	},
]

const data = {
	modifiers: {
		inSight: 'Target must be in sight of the Jedi',
		proximity: 'Modified by Proximity',
	},
	extra: {
		keptUp: 'Power can be kept up',
	},
}

export const powers = {
	stats: {
		control: {
			name: 'Control',
			dice: 2,
			pips: 2,
		},
		sense: {
			name: 'Sense',
			dice: 2,
			pips: 2,
		},
		alter: {
			name: 'Alter',
			dice: 2,
			pips: 0,
		},
	},
	skills: [
		{
			name: 'Telekinesis',
			powers: ['alter'],
			difficulty: {
				alter: {
					level: [
						{
							level: 1,
							text: '0kg < obj ≤ 1kg',
						},
						{
							level: 2,
							text: '1kg < obj ≤ 10kg',
						},
						{
							level: 3,
							text: '10kg < obj ≤ 100kg',
						},
						{
							level: 4,
							text: '100kg < obj ≤ 1.000kg',
						},
						{
							level: 5,
							text: '1.000kg < obj ≤ 10.000kg',
						},
						{
							level: 6,
							text: '10.000kg < obj ≤ 100.000kg',
						},
					],
					increased: [
						{
							add: '+5',
							text: '+10 meters/round movement',
						},
						{
							add: '+1 to +5',
							text: 'for gentle turns',
						},
						{
							add: '+6 to +10',
							text: 'for easy maneuvers',
						},
						{
							add: '+11 to +25 or more',
							text: 'for complex maneuvers',
						},
					],
					modifiers: [data.modifiers.inSight, data.modifiers.proximity],
				},
				extra: [data.extra.keptUp],
			},
			effect: {
				short: [
					'levitate objects with mental power - objects can be moved',
					'possible to lift serveral objects simultaneously - each object requires new Telekinesis roll',
					'levitate oneself or others is possible',
					'can be used as primitive space drive in emergencys',
					'when used against will: add his/her Perception or Control roll to diculty',
					'levitated objects can be used to attack others - automatically gives a Dark Side Point',
				],
				long: `By using this <click>power</click>, a Jedi may levitate objects with mental power. If used successfully, the object moves as the Jedi desires.<br>
				A Jedi can lift several objects simultaneously, but each additional object requires the Jedi to make a new telekinesis roll.<br>
				This power can be used to levitate oneself or others. It can be used as a primitive space drive in emergencies. When levitating against someone's will, the target will resist by adding his or her Perception or control roll to the difficulty number.<br>
				Levitated objects can be used to attack other characters, but this automatically gives the Jedi a Dark Side Point. Such objects do up to 1D damage if under one kilogram, 2D if one to ten kilos, 4D if 11to100 kilos, 3D Speeder-scale if one to ten tons, 5D Starfighter-scale if 11 to 100 tons.<br>
				Such attacks require an additional control roll by the Jedi, which would be this hit roll against the target's dodge. If the character doesn't dodge the attack, the difficulty if Easy.
				`,
			},
		},
		{
			name: 'Lightsaber Combat',
			powers: ['control', 'sense'],
			difficulty: {
				control: {
					level: [
						{
							level: 3,
						},
					],
				},
				sense: {
					level: [
						{
							level: 2,
						},
					],
				},
				extra: [data.extra.keptUp],
			},
			effect: {
				short: [
					[
						`power is called at start of battle - remains up until the Jedi is stunned or injured`,
						`a Jedi who has been injured or stunned may attempt to bring the power back up`,
					],
					`Sense dice to Lightsaber skill when trying to hit or parry`,
					[
						`add or subtract up to number of Control dice to lightsaber's damage`,
						`choose number of dice before rolling damage`,
					],
					[
						`fail: only use Lightsaber skill - cannot roll again during combat Lightsaber Combat may be used as reaction skill to parry blaster bolts`,
						`charakter must declare to parry this round`,
						`can control where blaster bolt goes - additional action, no full parry`,
						`Control roll: difficulty = dodge of target / distance to Jedi, damage = blaster damage`,
					],
				],
				long: `To use a lightsaber most effectively, a Jedi learns this power. The Jedi uses this power both to wield this elegant but difficult-to-control weapon while also sensing his opponent's actions through his connection to the Force.<br>
				This power is called upon at the start of a battle and remains up until the Jedi is stunned or injured; a Jedi who has been injured or stunned may attempt to bring the power back up.<br>
				If the Jedi is successful in using this power, the Jedi adds his sense dice to his lightsaber skill roll when trying to hit a target or parry, and he adds or subtracts up to the number of his control dice to the lightsaber's 5D damage when it hits in combat. Players must decide how many control dice they are adding or subtracting before they roll damage.<br>
				If the Jedi fails the power roll, he must use the lightsaber with only his lightsaber skill to hit and the weapon's normal damage in combat and he cannot attempt to use the power again for the duration of the combat.<br>
				Finally, the Jedi may use lightsaber combat to parry blaster bolts as a "reaction skill". To do this, the character must declare that he is parrying that round, using his lightsaber skill as normal.<br>
				The Jedi may also attempt to control where detected blaster bolts go; this is a reaction skill and counts as an additional action. (The Jedi cannot full parry when trying to control deflected bolts.) The Jedi must declare which specific shot he is controlling. Then, once the roll is made to see if the blaster bolt was parried by the Jedi, the Jedi makes a control roll, with the difficulty being his new target's dodge or the range (figured from the Jedi to his target). The damage is that of the original blaster bolt.`,
			},
			example: {
				long: `Ana is entering combat: she has a lightsaber skill of 4D, a control of 5D and a sense of 4D+2. She activates lightsaber combat by making her Moderate control roll and her Easy sense roll; she decides to keep the power "up". Since she is making both the control and sense rolls in the same round, each suffers a -1D penalty.<br>
				She adds her sense of 3D+2 (4D+2-1D) to her lightsaber skill roll of 4D, for a total lightsaber of 7D+2. She adds her control of 4D (5D-1D) to her lightsaber's damage of 5D, for a total of 9D.<br>
				When Ana attacks in a round, that's another action, for an additional -1D penalty to all actions (total penalty of -2D); she'd only roll 6D+2 to attack and would roll 8D for damage.<br>
				Ana Decides to parry a blaster bolt and control where it goes. This is two more actions in a round, which means a total of four actions (don't forget the control and sense to keep the power "up"), for a penalty of -3D: Ana's lightsaber skill is 5D+2, and her lightsaber's damage is 7D.<br>
				Ana's attacker is using a blaster pistol that causes 4D damage.<br>
				First Ana makes her parry roll with her lightsaber: her parry roll of 18 is higher than the attacker's blaster roll of 13, so Ana parries the bolt.<br>
				Now, Ana tries to control the blaster bolt. Her target is 20 meters away – that's a Moderate difficulty for the blaster pistol. Ana rolls a 14 with her control – just barely good enough to hit. The blaster bolt bounces off Ana's lightsaber blade and hits another goon, causing 4D damage.`,
			},
		},
		{
			name: 'Concentration',
			powers: ['control'],
			difficulty: {
				control: {
					level: [
						{
							level: 2,
							text: 'relaxed and at peace',
						},
						{
							level: 4,
							text:
								'filled with aggression, fear or other negative emotions',
						},
						{
							level: 5,
							text: 'acting on the negative emotions',
						},
					],
				},
			},
			effect: {
				long: `When using this power, Jedi clear Force Powers 5 all negative thoughts from their minds, feeling the Force flowing through the universe and their own being.<br>
				The individual Jedi concentrates on one specific task at hand. If the skill roll is successful, the Jedi may add +4D to any one action in that round. The Jedi may do nothing other than using the concentration power and using that one skill for a single action. The Jedi receives no bonus if anything else is done in that round, including duplicate uses of the same skill or dodges or parries.<br>
				This power may be used in conjunction with Force Points and Character Points. This power is only in effect for one round and may not be kept up.`,
			},
			example: {
				long: `Luke is flying down the trench of the Death Star. With Ben’s urging, he clears his mind of negative thoughts, and feels the Force flowing through him. Using the Force, he concentrates on the task at hand of firing a proton torpedo into the unshielded exhausst port. Since he has cleared his mind, the control difficulty is Easy.<br>
				Luke’s player declares that Luke is also spending a Force Point to accomplish the task this round. Luke’s starship gunnery skill is 6D. he looses -1D for doing one other thing in the round (using the Force counts as an action), reducing his starship gunnery skill to 5D. Because he rolls successfully for his control, he receives the bonus of +4D, making his effective skill for that round 9D. Because he is spending a Force Point, his skill level is doubled to 18D!<br>
				If Luke attempted any other action in that round, including firing another proton torpedo or blaster, or dodging enemy shots, he would receive no bonus.`,
			},
		},
		{
			name: 'Enhance Attribute',
			powers: ['control'],
			difficulty: {
				control: {
					level: [
						{
							level: 3,
						},
					],
				},
			},
			effect: {
				short: [],
				long: `A Jedi uses this power to increase a single attribute for a limited period.<br>
				An increased attribute can help a Jedi jump higher, see better, and run faster. All skills governed by the enhanced attribute increase by the same amount for as long as the power remains in effect.<br>
				An attribute increased by this power remains enhanced for the duration listed below. Duration and attribute increase are determined by how much a character’s control skill roll exceeds the difficulty number.<br>
				Duration can be extended through the use of Character Points – for every Character Point a Jedi spends, the duration is increased by one combat round. The points can be spent at any time before the power fades.<br>
				A Jedi can only increase one attribute at a time. If a character invokes the power to enhance a second attribute while the first attribute is still enhanced, then the first enhancement fades and the second attribute receives the increase.
				<div style="display: flex">
					<ul style="list-style: none; text-align: center;">
						<li>Skill Roll > Difficulty By</li>
						<li>0-13</li>
						<li>14-25</li>
						<li>26+</li>
					</ul>
					<ul style="list-style: none; text-align: center;">
						<li>Attribute Duration/Increase</li>
						<li>+1D / 3 rounds</li>
						<li>+2D / 2 rounds</li>
						<li>+3D / 1 round</li>
					</ul>
				</div>
				`,
			},
		},
		{
			name: 'Template',
			powers: ['control', 'sense'],
			difficulty: {
				control: {
					level: [
						{
							level: 1,
							text: 'VeryEasy',
						},
						{
							level: 2,
							text: 'Easy',
						},
						{
							level: 3,
							text: 'Moderate',
						},
						{
							level: 4,
							text: 'Difficult',
						},
						{
							level: 5,
							text: 'VerryDifficult',
						},
						{
							level: 6,
							text: 'Heroic',
						},
					],
					increased: [
						{
							add: '+1',
							text: 'plusONE',
						},
						{
							add: '+2',
							text: 'plusTWO',
						},
						{
							add: '+3',
							text: 'plusTHREE',
						},
						{
							add: '+4 or more',
							text: 'plusFOUR',
						},
					],
					modifiers: [data.modifiers.inSight, data.modifiers.proximity],
				},
				extra: [data.extra.keptUp],
			},
			effect: {
				short: [],
				long: ``,
			},
		},
	],
}

export const family = [
	{
		title: 'John Kebino',
		info: 'Tot',
		label: 'Vater - Mensch',
		content: `John erblickte zum ersten mal auf Coruscant das Licht der Welt. Seine Menschlichen Eltern...`,
	},
	{
		title: 'Damaya Kebino',
		info: 'geb. Tadro',
		label: 'Mutter - Miraluka',
		content: `Damaya ist eine...`,
	},
	{
		title: 'Zira Kebino',
		label: 'Schwester - Miraluka',
		content: `Zira ist meine Schwester.`,
	},
	{
		title: 'Ben / Harland David Sanders',
		info: 'Sebastian',
		label: 'Onkel - Mensch',
		content: '???',
	},
]
