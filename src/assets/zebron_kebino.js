export const points = {
	force: 0,
	darkside: 0,
	character: 97,
	spent: 97,
}

export const stats = [
	{
		name: 'Dexterity',
		dice: 3,
		pips: 0,
		skills: {
			Lightsaber: {
				name: 'Lightsaber',
				dice: 1,
				pips: 0,
			},
			'Lightsaber (s)': {
				name: 'Lightsaber',
				root: 'Lightsaber',
				spez: true,
				dice: 3,
				pips: 0,
			},
			Acrobatics: {
				name: 'Acrobatics',
				dice: 1,
				pips: 0,
			},
			Dodge: {
				name: 'Dodge',
				dice: 2,
				pips: 0,
			},
			Sprinting: {
				name: 'Sprinting',
				root: 'Running',
				spez: true,
				dice: 1,
				pips: 0,
			},
		},
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

export const data = {
	modifiers: {
		proximity: 'Modified by Proximity',
		relationship: 'Modified by Relationship',
	},
	extra: {
		inSight: 'Target must be in sight of the Jedi',
		keptUp: 'Power can be kept up',
		ignorePain:
			'Character can ignore pain of injuries for a long period of time',
		newRollWhenInjured:
			'Whenever character is injured again, must make a new Control pain roll',
	},
	time: {
		default: 'One round [1R]',
		minute: 'One minute [12R]',
		3: 'Three rounds [3R]',
	},
}

export const powers = {
	stats: {
		control: {
			name: 'Control',
			dice: 4,
			pips: 2,
		},
		sense: {
			name: 'Sense',
			dice: 3,
			pips: 2,
		},
		alter: {
			name: 'Alter',
			dice: 4,
			pips: 0,
		},
	},
	skills: [
		{
			type: 'label',
			name: 'Combat',
		},
		{
			name: 'Telekinesis',
			powers: ['alter'],
			extra: [data.extra.inSight, data.extra.keptUp],
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
					modifiers: [data.modifiers.proximity],
				},
			},
			effect: {
				short: [
					'levitate objects with mental power - objects can be moved',
					'possible to lift serveral objects simultaneously - each object requires new Telekinesis roll',
					'levitate oneself or others is possible',
					'can be used as primitive space drive in emergencys',
					'when used against will: add his/her Perception or Control roll to difficulty',
					'levitated objects can be used to attack others - automatically gives a Dark Side Point',
				],
				long: `By using this <click>power</click>, a Jedi may levitate objects with mental power. If used successfully, the object moves as the Jedi desires.<br>
				A Jedi can lift several objects simultaneously, but each additional object requires the Jedi to make a new telekinesis roll.<br>
				This power can be used to levitate oneself or others. It can be used as a primitive space drive in emergencies. When levitating against someone's will, the target will resist by adding his or her Perception or control roll to the difficulty number.<br>
				Levitated objects can be used to attack other characters, but this automatically gives the Jedi a Dark Side Point. Such objects do up to 1D damage if under one kilogram, 2D if one to ten kilos, 4D if 11to100 kilos, 3D Speeder-scale if one to ten tons, 5D Starfighter-scale if 11 to 100 tons.<br>
				Such attacks require an additional control roll by the Jedi, which would be this hit roll against the target's dodge. If the character doesn't dodge the attack, the difficulty if Easy.`,
			},
		},
		{
			name: 'Lightsaber Combat',
			powers: ['control', 'sense'],
			extra: [data.extra.keptUp],
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
			name: 'Force Push *',
			powers: ['alter'],
			source: 'Core Rulebook, page 86',
			required: ['Concentration', 'Life Detection', 'Telekinesis'],
			extra: [data.extra.inSight],
			difficulty: {
				alter: {
					level: [
						{
							level: 'Target’s control or Strength roll',
							hover: 'Looking for something?',
						},
					],
					increased: [
						{
							add: '+3',
							text: 'for every 5 meters away from target',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `With this power, a Jedi may use the Force to push several adjacent targets backwards, knocking them prone or banging them against a wall. Each target past the first incurs a -1D penalty on the Jedi using the power (ie, 1 target, no penalty; 2 targets, -1D penalty; 3 targets, -2D penalty; 4 targets, -3D penalty…). Each target makes either a control or Strength roll to resist, and the acting Jedi’s alter roll result is compared to each result in turn to determine the effects. A target that is knocked back into a wall or other solid object takes the listed damage. If a Jedi kills a living being as a result of this power he immediately receives a Dark Side Point; as such, he may roll less than his full alter score if he so chooses.
				<div style="display: flex">
					<ul style="list-style: none; text-align: center;">
						<li><b><i>Alter Roll > Difficulty By</i></b></li>
						<li>0-5</li>
						<li>6-10</li>
						<li>11-15</li>
						<li>16-20</li>
						<li>21+</li>
					</ul>
					<ul style="list-style: none; text-align: center;">
						<li><b><i>Target pushed back/Collision damage</i></b></li>
						<li>2 meters / 2D</li>
						<li>3 meters / 3D</li>
						<li>5 meters / 4D</li>
						<li>10 meters / 5D</li>
						<li>15 meters / 6D</li>
					</ul>
				</div>`,
			},
		},
		{ type: 'label' },
		{
			type: 'label',
			name: 'Buffs',
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
				long: `A Jedi uses this power to increase a single attribute for a limited period.An increased attribute can help a Jedi jump higher, see better, and run faster. All skills governed by the enhanced attribute increase by the same amount for as long as the power remains in effect.<br>
				An attribute increased by this power remains enhanced for the duration listed below. Duration and attribute increase are determined by how much a character’s control skill roll exceeds the difficulty number.<br>
				Duration can be extended through the use of Character Points – for every Character Point a Jedi spends, the duration is increased by one combat round. The points can be spent at any time before the power fades.<br>
				A Jedi can only increase one attribute at a time. If a character invokes the power to enhance a second attribute while the first attribute is still enhanced, then the first enhancement fades and the second attribute receives the increase.
				<div style="display: flex">
					<ul style="list-style: none; text-align: center;">
						<li><b><i>Skill Roll > Difficulty By</i></b></li>
						<li>0-13</li>
						<li>14-25</li>
						<li>26+</li>
					</ul>
					<ul style="list-style: none; text-align: center;">
						<li><b><i>Attribute Duration/Increase</i></b></li>
						<li>+1D / 3 rounds</li>
						<li>+2D / 2 rounds</li>
						<li>+3D / 1 round</li>
					</ul>
				</div>
				`,
			},
		},
		{
			name: 'Force Jump * ',
			powers: ['control', 'alter'],
			requires: ['Enhance Attribute', 'Telekinesis'],
			difficulty: {
				control: {
					level: [
						{
							level: '1-3',
							hover: '',
							text: 'Jumping Increase +1D',
						},
						{
							level: '4-8',
							hover: '',
							text: 'Jumping Increase +2D',
						},
						{
							level: '9-15',
							hover: '=-6',
							text: 'Jumping Increase +3D',
						},
						{
							level: '16-25',
							hover: '',
							text: 'Jumping Increase +4D',
						},
						{
							level: '26-37',
							hover: 'Nothing to see here...',
							text: 'Jumping Increase +5D',
						},
						{
							level: '38+',
							hover: '',
							text: 'Jumping Increase +6D',
						},
					],
				},
				alter: {
					level: [
						{
							level: 2
						}
					]
				}
			},
			effect: {
				long: `A Jedi uses this power to increase his jumping ability in order to perform impossibly high leaps. If both Force skill rolls are successful, the character uses his normal climbing/jumping skill to perform the jump, but he uses the special table below to determine difficulties. If the control roll exceeds the difficulty, the character gains an immediate bonus to his climbing/jumping roll. If the Jedi fails any Force skill roll, the power is not activated and the character is left to use his normal jumping ability (and there are certain situations where you can’t back out of a jump because your power failed). At the gamemaster’s discretion, a failed climbing/jumping roll might mean the Jedi fails to achieve the desired height or distance, fails to properly cushion his landing and suffers normal falling damage, or both. Multiple action penalties apply. The climbing/jumping roll is a third action in that round, whether the power is successful or not.<br>
				<div style="display: flex">
					<ul style="list-style: none; text-align: center;">
						<li><b><i>Height Jumped</i></b></li>
						<li>0 - 1 meter</li>
						<li>1 - 2 meter</li>
						<li>3 - 4 meter</li>
						<li>5 - 8 meter</li>
						<li>9 - 15 meter</li>
						<li>16 - 20 meter</li>
					</ul>
					<ul style="list-style: none; text-align: center;">
						<li><b><i>Jumping Difficulty</i></b></li>
						<li>Very Easy</li>
						<li>Easy</li>
						<li>Moderate</li>
						<li>Difficulty</li>
						<li>Very Difficulty</li>
						<li>Heroic</li>
					</ul>
				</div>
				Add +5 to the difficulty for every additional 5 meters. If the character is simply jumping downwards, with no upwards movement, reduce jumping difficulty by one level. Add +1 to the difficulty per meter of horizontal distance jumped.
				`,
			},
			example: {
				long: `Ambelled Daru has a control skill of 5D, alter of 3D+2, and a climbing/jumping skill of 4D, and wants to perform a Force jump across a chasm to a ledge above. He rolls 1D+2 for alter (3D+2 subtracting –2D for multiple action penalties), and gets a 7, making his alter difficulty. Next he rolls his control of 3D, and gets a 11 (which exceeds the difficulty by 4). This adds +2D to his climbing/jumping roll, cancelling out the multiple action penalty.<br>
				The ledge on which he wants to jump is 4 meters up and the chasm is 3 meters across, thus the difficulty is Moderate+3. Ambelled Daru rolls his 4D climbing/jumping (4D –2D +2D), and gets a 16, making the difficulty and using the Force to leap safely on top of the ledge.`
			}
		},
		{ type: 'label' },
		{
			type: 'label',
			name: 'Healing',
		},
		{
			name: 'Control Pain',
			powers: ['control'],
			extra: [
				data.extra.keptUp,
				data.extra.ignorePain,
				data.extra.newRollWhenInjured,
			],
			difficulty: {
				control: {
					level: [
						{
							level: 1,
							text: 'for wounded or stunned characters',
						},
						{
							level: 2,
							text: 'for incapacitated characters',
						},
						{
							level: 4,
							text: 'for mortally wounded characters',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `An injured character who uses control pain can act as if he has not been wounded the next round after he uses the skill. The wound is not healed, but the character doesn’t suffer the penalties of being wounded: a wounded Jedi doesn’t loose 1D from all actions; an incapacitated character can still act normally, as can a mortally wounded character. This power can also be used to shrug off any stun results.<br>
				However, the injury can still grow worse even if the character doesn’t feel the pain. For example, a character who’s been wounded twice and is wounded again would still become incapacitated. Mortally wounded users make the same rolls as other mortally wounded characters, even if they aren’t feeling any pain.`,
			},
		},
		{
			name: 'Remain Conscious *',
			powers: ['control'],
			required: ['Control Pain'],
			difficulty: {
				control: {
					level: [
						{
							level: 2,
							text: 'for stunned characters',
						},
						{
							level: 3,
							text: 'for incapacitated characters',
						},
						{
							level: 4,
							text: 'for mortally wounded characters',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `Remain conscious allows a Jedi to remain conscious even when he has suffered injuries which would knock him unconscious. In game terms, when a character with this power suffers this kind of injury, they lose all of their actions for the rest of the round, but they are still conscious (normal characters automatically pass out). On the next round, the character may attempt to activate the power – this must be the first action of that round; the Jedi cannot even dodge or parry.<br>
				If the role is unsuccessful, the Jedi passes out. If successful, the Jedi can do any one other action declared for that round – often characters will attempt to control pain so that he will be able to remain conscious. Once this action is completed, the Jedi will lapse into unconsciousness, unless control pain or something else is done to keep the character conscious.`,
			},
			example: {
				long: `Ana suffers several stuns and should be knocked unconscious ... but she has remain conscious. Ana loses her remaining actions for that round, but she is still awake.<br>
				At the beginning of the next round, Ana’s player declares that she will try to activate remain conscious and control pain. The player makes the Moderate control roll to activate remain conscious, so Ana stays awake for the rest of the round. (If the roll had failed or Ana hadn’t activated remain conscious, she would have passed out at the beginning of the round.) Ana must now make a Very Easy control roll to activate control pain. If she succeeds, she may now act normally; if the roll fails, Ana is overwhelmed by the pain and slips into unconsciousness.`,
			},
		},
		{
			name: 'Hibernation Trance',
			powers: ['control'],
			extra: [data.extra.keptUp],
			difficulty: {
				control: {
					level: [
						{
							level: 4,
						},
					],
				},
			},
			effect: {
				short: [],
				long: `The Jedi places himself into a deep trance, remarkably slowing all body functions. The Jedi’s heartbeat slows, his breathing drops to barely perceivable levels, and he falls unconscious.<br>
				When a Jedi enters a hibernation trance, the character must declare how much time they will spend and/or under what circumstances the character will awaken: after a specific amount of time, or what stimulus needs to be present (noise, someone touching them, etc.). A character can heal while in a hibernation trance, but may not use any other skills or Force powers.<br>
				Hibernation trance serves two purposes. It allows a Jedi to "play dead." It can be used to survive when food or air supplies are low. A character in hibernation uses only about a tenth as much as someone who is sleeping – he can hibernate for a week in a dry climate, for up to a	month in a wet climate before dying of thirst.<br>
				Anyone who sees a Jedi in hibernation assumes he is dead unless he makes a point to test him. Another Jedi with the sense skill or the life detection power will be able to detect the Force within the hibernating character and realize that he is alive.`,
			},
		},
		{
			name: 'Accelerate Healing',
			powers: ['control'],
			timeToUse: data.time.minute,
			difficulty: {
				control: {
					level: [
						{
							level: 2,
							text: 'for wounded characters',
						},
						{
							level: 3,
							text: 'for incapacitated characters',
						},
						{
							level: 4,
							text: 'for mortally wounded characters',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `A Jedi who uses this power successfully may make two natural healing rolls for the current day (12 hours apart) regardless of the severity of the injury. The Jedi gets a +2 modifier to both Strength rolls to heal. Accelerate healing may only be attempted once per day.`,
			},
			example: {
				long: `Ana has been incapacitated; normally a full two weeks of rest are necessary before she can roll to heal.<br>
				She makes her Moderate control roll to activate accelerate healing. She now gets to make two Strength rolls to heal and gets to add +2 to both rolls.<br>
				Since she’s incapacitated, Ana needs a total of 9 or better to improve to wounded.<br>
				Ana’s first Strength roll is an eight; adding the +2 gives her a total of 10. She improves from incapacitated to wounded twice (she’s at –2D to all actions).<br>
				Twelve hours later, Ana gets to make her second healing roll. Since she’s wounded, she only needs a Strength total of 7 to improve from wounded twice (at –2D) to wounded (-1D to all actions). Her Strength roll is seven; the +2 gives her a total of nine. She now heals to wounded.`,
			},
		},
		{ type: 'label' },
		{
			type: 'label',
			name: 'Enhance Senses',
		},
		{
			name: 'Merge Senses *',
			powers: ['sense'],
			timeToUse: data.time[3],
			required: ['Magnify Senses'],
			difficulty: {
				sense: {
					level: [
						{
							level: 3,
						},
					],
					modifiers: [data.modifiers.proximity],
				},
			},
			effect: {
				short: [],
				long: `This power allows a Force user to perceive things through the senses of another creature, one with animal intelligence or less. He can see through the eyes of the selected creature, enjoying the benefits of being bound by the restrictions of the creature’s vision. He can hear through the creature’s ears; smell was that creature smells; and physically feel whatever the creature is feeling. The Force user does not control the creature, but can make suggestions. The simpler or less threatening the request, the more likely it will be agreed to. If a suggestion goes against the nature of the creature or would put it in an obviously hazardous situation, the Force user must make a sense roll against the subject’s willpower. Failure means the suggestion is ignored.<br>
				While the Force user’s senses are merged with a creature’s, the Force user’s body is motionless, its senses unable to function until, of course, the meld is broken. Releasing the target creature requires a Moderate roll. The link with the creature is also broken by the death of either the creature of the Force user. If the creature suffers damage or dies during a meld, the Force user suffers one-half the amount of damage.`,
			},
		},
		{
			name: 'Magnify Senses',
			powers: ['sense'],
			timeToUse: data.time[3],
			difficulty: {
				sense: {
					level: [
						{
							level: 1,
						},
					],
					modifiers: [data.modifiers.proximity],
				},
			},
			effect: {
				short: [],
				long: `This power allows a Jedi to increase the effectiveness of his normal senses to perceive things that are otherwise impossible without aid. He can hear noises beyond his normal hearing due to distance or softness – he can’t hear or see beyond normal species frequencies. Likewise, he can see normal visible things over distances that would normally require the use of macrobinoculars, and identify scents and odors that are normally too faint for human olfactory senses.`,
			},
		},
		{
			name: 'Life Sense',
			powers: ['sense'],
			required: ['Life Detection'],
			extra: [data.extra.keptUp],
			difficulty: {
				sense: {
					level: [
						{
							level: 1,
						},
					],
					modifiers: [
						data.modifiers.proximity,
						data.modifiers.relationship,
					],
				},
			},
			effect: {
				short: [],
				long: `The user can sense the presence and identity of a specific person for whom he searches. The user can sense how badly wounded, diseased, or otherwise physically disturbed the target is.<br>
				A target may use the control skill to hide his identity from the Jedi uses life sense. The character’s control skill is added to the senser’s difficulty.`,
			},
		},
		{
			name: 'Life Detection',
			powers: ['sense'],
			extra: [data.extra.keptUp],
			difficulty: {
				sense: {
					level: [
						{
							level: 1,
							text: 'if subject has Force skills or is Force-sensitive',
						},
						{
							level: 3,
							text: 'if not',
						},
					],
					modifiers: [data.modifiers.relationship],
				},
			},
			effect: {
				short: [],
				long: `This power allows the Jedi to detect the location of sentient beings who might otherwise remain hidden from their normal senses. When the power is activated, the Jedi knows the location of all sentients within 10 meters – if the power is kept up, the Jedi may know whenever a sentient approaches within 10 meters of them or vice versa.<br>
				When the Jedi approaches or is approached by a sentient being, the character makes a sense roll and each sentient creature makes an opposed control or Perception roll to avoid detection. Both actions are "free" actions and don’t count as a skill use (and thus there are no die code penalties except those caused by injury). If a tie occurs, the Jedi detects the creature in question.<br>
				If Jedi beats the target’s roll by 10 or more points, the Jedi is aware if the person has Force skills (yes or no), is Force-sensitive (yes or no), or if they have met before (yes or no), and if yes, what their identity is.`,
			},
			example: {
				long: `Ana has her life detection power "up." Bill, the gamemaster, knows that three Gamorreans are approaching Ana from behind. She rolls her sense to see if she can detect the beings — she rolls a 22.<br>
				The first Gamorrean’s roll is a 9; Ana’s roll beats his by 13 points. Ana knows the being is not Force-sensitive, doesn’t have Force skills; since Ana’s never met the being before, she doesn’t know its identity, not even its species.<br>
				The second Gamorrean rolls a 15 — Ana only knows about the existence and location of the second being.<br>
				Ana’s roll beats the third Gamorrean’s by 11 points, so she knows that this being is also not Force-sensitive and doesn’t have Force skills. However, Ana has met the creature before—she knows the third being is Draughckt, a Gamorrean she met a few years earlier on the planet Seltos.`,
			},
		},
		{
			name: 'Danger Sense',
			powers: ['sense'],
			required: ['Life Detection'],
			extra: [data.extra.keptUp],
			difficulty: {
				sense: {
					level: [
						{
							level: 3,
						},
						{
							level: 'Attacker’s Control roll',
							hover: 'Alternative',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `Danger sense allows a Jedi to extend his senses around himself like protective sensors creating an early warning system for as long as the power remains in effect.<br>
				When this power is used, the Jedi detects any attacks the round before they are made. This gives the Jedi a round to decide how to react to the danger.<br>
				In game terms, if a character plans to attack the Jedi on the next round, she must declare her action the round before. Attacking characters with Force skills may roll their control skill to increase the difficulty of using this power.<br>`,
			},
		},
		{
			name: 'Combat Sense *',
			powers: ['sense'],
			required: ['Danger Sense', 'Life Detection'],
			difficulty: {
				sense: {
					level: [
						{
							level: 3,
							text: 'for one opponent',
						},
					],
					increased: [
						{
							add: '+3',
							text:
								'for each additional opponent the Jedi wishes to defend against',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `Combat sense allows a Jedi to focus on the battle at hand. Everything else becomes dulled and muted as the Jedi’s senses are all turned toward the combat occurring around him. All targets become mentally highlighted in the Jedi’s mind, enhancing his ability to attack and defend. In game terms, the Jedi gains important advantages.<br>
				First, the Jedi may choose when he wishes to act that round—no initiative rolls are necessary while the power is in effect. If more than one Jedi is using the power, whoever rolled highest when invoking the power determines when he wishes to act.<br>
				Second, the Jedi’s attack and defense rolls are increased by +2. Combat sense lasts for ten combat rounds and doesn’t count as a "skill use" for determining die code penalties.`,
			},
		},
		{ type: 'label' },
		{
			type: 'label',
			name: 'Communication',
		},
		{
			name: 'Affect Mind *',
			powers: ['control', 'sense', 'alter'],
			difficulty: {
				control: {
					level: [
						{
							level: 1,
							text: 'for perceptions',
						},
						{
							level: 2,
							text: 'for memories',
						},
						{
							level: 3,
							text: 'for conclusions',
						},
					],
					modifiers: [data.modifiers.proximity],
				},
				sense: {
					level: [
						{
							level: 'Target’s Control or Perception roll',
							hover: 'Found ya!',
						},
					],
				},
				alter: {
					level: [
						{
							level: 1,
							text:
								'for slight, momentary misperceptions, minor changes to distant memories, or if the character doesn’t care one way or another',
						},
						{
							level: 2,
							text:
								'for brief visible phenomena, memories less than a year old, or minor emotions regarding a coming conclusion',
						},
						{
							level: 3,
							text:
								'for short hallucinations, memories less than a day old, or if the target has strict orders about the conclusion',
						},
						{
							level: 4,
							text:
								'slight disguise to facial features, hallucinations which can be sensed with two senses (sight and sound, for example), memories less than a minute old, or if the matter involving the conclusion is very important to the target',
						},
						{
							level: 5,
							text:
								'for hallucinations that can be sensed with all five senses, a major memory change, or if the logic is absolutely clear and coming to the wrong conclusion is virtually impossible',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `This power is used to alter a character’s perception so that he senses an illusion or fails to see what the Jedi doesn’t want him to see. This power is used to permanently alter a character’s memories so that he remembers things incorrectly or fails to remember something. This power can also be used to alter a character’s conclusions so that he comes to an incorrect conclusion.<br>
				Before making skill rolls, the character must describe exactly what he wants the effect to be. The power is normally on one target; two or more targets can only be affected if the power is used two or more times.<br>
				A character believes he is affected by any successful illusions – a character who thinks he is struck by an illusionary object would feel the blow. If he thinks he was injured, pain would be felt, or if he thought he was killed, he would become unconscious. The character does not suffer any true injury.<br>
				This power can’t be used to affect droids and does not work through recording devices.`,
			},
		},
		{
			name: 'Translation',
			powers: ['sense'],
			required: [
				'Receptive Telepathy',
				'Projective Telepathy',
				'Life Sense',
			],
			extra: [data.extra.keptUp],
			difficulty: {
				sense: {
					level: [
						{
							level: 3,
							text: 'for humans or aliens',
						},
						{
							level: 4,
							text: 'for droids',
						},
					],
					increased: [
						{
							add: '+5',
							text: 'if target is being purposely cryptic',
						},
						{
							add: '+20',
							text: 'if the language is written down',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `The character may translate a language and speak it. The Jedi may decipher body language, explore the spoken word, or translate ancient Sith texts, etc. In order for this to work, the character must first hear the target speak, or see the works in written form (such as an ancient text or document). It takes only one application of this power to "understand" a language. As long as they all speak the same language and the power is kept up, the character need not roll for each individual talking. Also because they also "speak" using beeps and whistles, droids may be communicated with using this power.<br>
				Note that the character does not really know the language. Once this power is no longer in use, the Jedi is once again unable to understand or speak the language.`,
			},
		},
		{
			name: 'Receptive Telepathy',
			powers: ['sense'],
			required: ['Life Sense'],
			extra: [
				data.extra.keptUp +
					' if target is willing and proximity modifier doesn’t increase',
			],
			difficulty: {
				sense: {
					level: [
						{
							level: 1,
							text: 'for friendly, non-resisting targets',
						},
						{
							level: 'Perception or Control',
							text: 'if target resists',
						},
					],
					modifiers: [
						data.modifiers.proximity,
						data.modifiers.relationship,
					],
				},
			},
			effect: {
				short: [],
				long: `If the Jedi makes the power roll, he can read the surface thoughts and emotions of the target. The Jedi "hears" what the target is thinking, but cannot probe for deeper information. When used on another player, the gamemaster asks the player if he minds the power being used on him/her. If used on a gamemaster character the gamemaster decides if the target will resist.<br>
				If the skill’s roll is double the difficulty, the Jedi can shift through memories up to 24 hours old, though this takes two rounds. A Jedi cannot sift through memories in the same round that contact is made – this process takes a full round.<br>
				A Jedi can read the minds of more than one person at a time, but each additional person counts as an additional action, with separate rolls and multiple skill use penalties.<br>
				This power may be used on creatures and other sentient beings, although it cannot be used on droids.`,
			},
		},
		{
			name: 'Projective Telepathy',
			powers: ['control', 'sense'],
			required: ['Receptive Telepathy', 'Life Sense'],
			difficulty: {
				control: {
					level: [
						{
							level: 1,
						},
					],
					increased: [
						{
							add: '+5 to +10',
							text:
								"if Jedi cannot verbalize thoughts he's transmitting (Zebron GM Rule: increase doesn't apply)",
						},
					],
					modifiers: [data.modifiers.proximity],
				},
				sense: {
					level: [
						{
							level: 1,
							text: 'if target is friendly and doesn’t resist',
						},
						{
							level: 'Perception or Control',
							text: 'if target resists',
						},
					],
					modifiers: [data.modifiers.relationship],
				},
			},
			effect: {
				short: [],
				long: `If the Jedi successfully projects his thoughts, the target "hears" his thoughts and "feels" his emotions. The Jedi can only broadcast feelings, emotions and perhaps a couple of words – this power cannot be used to send sentences or to hold conversations.<br>
				The target understand that the thoughts and feelings he is experiencing are not his own and that they belong to the user of the power. If the Jedi doesn’t "verbally" identify himself, the target doesn’t know who is projecting thoughts to him. This power can only be used to communicate with other minds, not control them.`,
			},
		},
		{ type: 'label' },
		{
			type: 'label',
			name: 'Party',
		},
		{
			name: "Control Another's Pain",
			powers: ['control', 'alter'],
			required: ['Control Pain'],
			difficulty: {
				control: {
					level: [
						{
							level: 1,
						},
					],
					modifiers: [data.modifiers.relationship],
				},
				alter: {
					level: [
						{
							level: 2,
							text: 'for wounded characters',
						},
						{
							level: 3,
							text: 'for incapacitated characters',
						},
						{
							level: 4,
							text: 'for mortally wounded characters',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `This power allows a Jedi to help another character control pain, under the same rules and conditions outlined in the same rules and conditions outlined in the control pain power. The Jedi must be touching the character to use this power. [<b>Editor’s note</b>: The Tales of the Jedi Companion removes the restriction that the Jedi must be touching the character, and instead modifies the difficulty by proximity.]`,
			},
		},
		{
			name: 'Accelerate Another’s Healing',
			powers: ['control', 'alter'],
			required: ["Control Another's Pain", 'Control Pain'],
			timeToUse: data.time.minute,
			difficulty: {
				control: {
					level: [
						{
							level: 1,
						},
					],
					modifiers: [data.modifiers.relationship],
				},
				alter: {
					level: [
						{
							level: 1,
						},
					],
				},
			},
			effect: {
				short: [],
				long: `This allows a Jedi to heal another character. The target is allowed to make extra healing rolls, as outlined in accelerate healing. The Jedi must be touching the character whenever he attempts a healing roll.`,
			},
		},
		{
			name: 'Transfer Force',
			powers: ['control', 'alter'],
			required: ['Control Pain', 'Control Another’s Pain'],
			timeToUse: data.time.minute,
			difficulty: {
				control: {
					level: [
						{
							level: 2,
						},
					],
					modifiers: [data.modifiers.relationship],
				},
				alter: {
					level: [
						{
							level: 3,
						},
					],
				},
			},
			effect: {
				short: [],
				long: `This power will save a mortally wounded character from dying because the Jedi is transferring her life force to the target. When a character has force transferred to him, he remains mortally wounded, but he will not die provided he isn’t injured again. The injured character is in hibernation and will stay alive in this state for up to six weeks. The Jedi must be touching the target character when the power is activated.<br>
				When this power is used, the user must spend a Force Point (this is the life force that is transferred to the target). This use is always considered heroic, so the character will get the Force Point back at the end of the adventure.<br>
				The recipient of this power must be willing.`,
			},
		},
	],
}

export const powers_sorted = {
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
			name: 'Accelerate Healing',
			powers: ['control'],
			timeToUse: data.time.minute,
			difficulty: {
				control: {
					level: [
						{
							level: 2,
							text: 'for wounded characters',
						},
						{
							level: 3,
							text: 'for incapacitated characters',
						},
						{
							level: 4,
							text: 'for mortally wounded characters',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `A Jedi who uses this power successfully may make two natural healing rolls for the current day (12 hours apart) regardless of the severity of the injury. The Jedi gets a +2 modifier to both Strength rolls to heal. Accelerate healing may only be attempted once per day.`,
			},
			example: {
				long: `Ana has been incapacitated; normally a full two weeks of rest are necessary before she can roll to heal.<br>
				She makes her Moderate control roll to activate accelerate healing. She now gets to make two Strength rolls to heal and gets to add +2 to both rolls.<br>
				Since she’s incapacitated, Ana needs a total of 9 or better to improve to wounded.<br>
				Ana’s first Strength roll is an eight; adding the +2 gives her a total of 10. She improves from incapacitated to wounded twice (she’s at –2D to all actions).<br>
				Twelve hours later, Ana gets to make her second healing roll. Since she’s wounded, she only needs a Strength total of 7 to improve from wounded twice (at –2D) to wounded (-1D to all actions). Her Strength roll is seven; the +2 gives her a total of nine. She now heals to wounded.`,
			},
		},
		{
			name: 'Accelerate Another’s Healing',
			powers: ['control', 'alter'],
			required: ["Control Another's Pain", 'Control Pain'],
			timeToUse: data.time.minute,
			difficulty: {
				control: {
					level: [
						{
							level: 1,
						},
					],
					modifiers: [data.modifiers.relationship],
				},
				alter: {
					level: [
						{
							level: 1,
						},
					],
				},
			},
			effect: {
				short: [],
				long: `This allows a Jedi to heal another character. The target is allowed to make extra healing rolls, as outlined in accelerate healing. The Jedi must be touching the character whenever he attempts a healing roll.`,
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
			name: 'Control Pain',
			powers: ['control'],
			extra: [
				data.extra.keptUp,
				data.extra.ignorePain,
				data.extra.newRollWhenInjured,
			],
			difficulty: {
				control: {
					level: [
						{
							level: 1,
							text: 'for wounded or stunned characters',
						},
						{
							level: 2,
							text: 'for incapacitated characters',
						},
						{
							level: 4,
							text: 'for mortally wounded characters',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `An injured character who uses control pain can act as if he has not been wounded the next round after he uses the skill. The wound is not healed, but the character doesn’t suffer the penalties of being wounded: a wounded Jedi doesn’t loose 1D from all actions; an incapacitated character can still act normally, as can a mortally wounded character. This power can also be used to shrug off any stun results.<br>
				However, the injury can still grow worse even if the character doesn’t feel the pain. For example, a character who’s been wounded twice and is wounded again would still become incapacitated. Mortally wounded users make the same rolls as other mortally wounded characters, even if they aren’t feeling any pain.`,
			},
		},
		{
			name: "Control Another's Pain",
			powers: ['control', 'alter'],
			required: ['Control Pain'],
			difficulty: {
				control: {
					level: [
						{
							level: 1,
						},
					],
					modifiers: [data.modifiers.relationship],
				},
				alter: {
					level: [
						{
							level: 2,
							text: 'for wounded characters',
						},
						{
							level: 3,
							text: 'for incapacitated characters',
						},
						{
							level: 4,
							text: 'for mortally wounded characters',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `This power allows a Jedi to help another character control pain, under the same rules and conditions outlined in the same rules and conditions outlined in the control pain power. The Jedi must be touching the character to use this power. [<b>Editor’s note</b>: The Tales of the Jedi Companion removes the restriction that the Jedi must be touching the character, and instead modifies the difficulty by proximity.]`,
			},
		},
		{
			name: 'Danger Sense',
			powers: ['sense'],
			required: ['Life Detection'],
			extra: [data.extra.keptUp],
			difficulty: {
				sense: {
					level: [
						{
							level: 3,
						},
						{
							level: "Attacker's Control roll",
							hover: 'Alternative',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `Danger sense allows a Jedi to extend his senses around himself like protective sensors creating an early warning system for as long as the power remains in effect.<br>
				When this power is used, the Jedi detects any attacks the round before they are made. This gives the Jedi a round to decide how to react to the danger.<br>
				In game terms, if a character plans to attack the Jedi on the next round, she must declare her action the round before. Attacking characters with Force skills may roll their control skill to increase the difficulty of using this power.<br>`,
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
				long: `A Jedi uses this power to increase a single attribute for a limited period.An increased attribute can help a Jedi jump higher, see better, and run faster. All skills governed by the enhanced attribute increase by the same amount for as long as the power remains in effect.<br>
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
			name: 'Hibernation Trance',
			powers: ['control'],
			extra: [data.extra.keptUp],
			difficulty: {
				control: {
					level: [
						{
							level: 4,
						},
					],
				},
			},
			effect: {
				short: [],
				long: `The Jedi places himself into a deep trance, remarkably slowing all body functions. The Jedi’s heartbeat slows, his breathing drops to barely perceivable levels, and he falls unconscious.<br>
				When a Jedi enters a hibernation trance, the character must declare how much time they will spend and/or under what circumstances the character will awaken: after a specific amount of time, or what stimulus needs to be present (noise, someone touching them, etc.). A character can heal while in a hibernation trance, but may not use any other skills or Force powers.<br>
				Hibernation trance serves two purposes. It allows a Jedi to "play dead." It can be used to survive when food or air supplies are low. A character in hibernation uses only about a tenth as much as someone who is sleeping – he can hibernate for a week in a dry climate, for up to a	month in a wet climate before dying of thirst.<br>
				Anyone who sees a Jedi in hibernation assumes he is dead unless he makes a point to test him. Another Jedi with the sense skill or the life detection power will be able to detect the Force within the hibernating character and realize that he is alive.`,
			},
		},
		{
			name: 'Life Detection',
			powers: ['sense'],
			extra: [data.extra.keptUp],
			difficulty: {
				sense: {
					level: [
						{
							level: 1,
							text: 'if subject has Force skills or is Force-sensitive',
						},
						{
							level: 3,
							text: 'if not',
						},
					],
					modifiers: [data.modifiers.relationship],
				},
			},
			effect: {
				short: [],
				long: `This power allows the Jedi to detect the location of sentient beings who might otherwise remain hidden from their normal senses. When the power is activated, the Jedi knows the location of all sentients within 10 meters – if the power is kept up, the Jedi may know whenever a sentient approaches within 10 meters of them or vice versa.<br>
				When the Jedi approaches or is approached by a sentient being, the character makes a sense roll and each sentient creature makes an opposed control or Perception roll to avoid detection. Both actions are "free" actions and don’t count as a skill use (and thus there are no die code penalties except those caused by injury). If a tie occurs, the Jedi detects the creature in question.<br>
				If Jedi beats the target’s roll by 10 or more points, the Jedi is aware if the person has Force skills (yes or no), is Force-sensitive (yes or no), or if they have met before (yes or no), and if yes, what their identity is.`,
			},
			example: {
				long: `Ana has her life detection power "up." Bill, the gamemaster, knows that three Gamorreans are approaching Ana from behind. She rolls her sense to see if she can detect the beings — she rolls a 22.<br>
				The first Gamorrean’s roll is a 9; Ana’s roll beats his by 13 points. Ana knows the being is not Force-sensitive, doesn’t have Force skills; since Ana’s never met the being before, she doesn’t know its identity, not even its species.<br>
				The second Gamorrean rolls a 15 — Ana only knows about the existence and location of the second being.<br>
				Ana’s roll beats the third Gamorrean’s by 11 points, so she knows that this being is also not Force-sensitive and doesn’t have Force skills. However, Ana has met the creature before—she knows the third being is Draughckt, a Gamorrean she met a few years earlier on the planet Seltos.`,
			},
		},
		{
			name: 'Life Sense',
			powers: ['sense'],
			required: ['Life Detection'],
			extra: [data.extra.keptUp],
			difficulty: {
				sense: {
					level: [
						{
							level: 1,
						},
					],
					modifiers: [
						data.modifiers.proximity,
						data.modifiers.relationship,
					],
				},
			},
			effect: {
				short: [],
				long: `The user can sense the presence and identity of a specific person for whom he searches. The user can sense how badly wounded, diseased, or otherwise physically disturbed the target is.<br>
				A target may use the control skill to hide his identity from the Jedi uses life sense. The character’s control skill is added to the senser’s difficulty.`,
			},
		},
		{
			name: 'Lightsaber Combat',
			powers: ['control', 'sense'],
			extra: [data.extra.keptUp],
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
			name: 'Magnify Senses',
			powers: ['sense'],
			timeToUse: data.time[3],
			difficulty: {
				sense: {
					level: [
						{
							level: 1,
						},
					],
					modifiers: [data.modifiers.proximity],
				},
			},
			effect: {
				short: [],
				long: `This power allows a Jedi to increase the effectiveness of his normal senses to perceive things that are otherwise impossible without aid. He can hear noises beyond his normal hearing due to distance or softness – he can’t hear or see beyond normal species frequencies. Likewise, he can see normal visible things over distances that would normally require the use of macrobinoculars, and identify scents and odors that are normally too faint for human olfactory senses.`,
			},
		},
		{
			name: 'Projective Telepathy',
			powers: ['control', 'sense'],
			required: ['Receptive Telepathy', 'Life Sense'],
			difficulty: {
				control: {
					level: [
						{
							level: 1,
						},
					],
					increased: [
						{
							add: '+5 to +10',
							text:
								"if Jedi cannot verbalize thoughts he's transmitting (Zebron GM Rule: increase doesn't apply)",
						},
					],
					modifiers: [data.modifiers.proximity],
				},
				sense: {
					level: [
						{
							level: 1,
							text: 'if target is friendly and doesn’t resist',
						},
						{
							level: 'Perception or Control',
							text: 'if target resists',
						},
					],
					modifiers: [data.modifiers.relationship],
				},
			},
			effect: {
				short: [],
				long: `If the Jedi successfully projects his thoughts, the target "hears" his thoughts and "feels" his emotions. The Jedi can only broadcast feelings, emotions and perhaps a couple of words – this power cannot be used to send sentences or to hold conversations.<br>
				The target understand that the thoughts and feelings he is experiencing are not his own and that they belong to the user of the power. If the Jedi doesn’t "verbally" identify himself, the target doesn’t know who is projecting thoughts to him. This power can only be used to communicate with other minds, not control them.`,
			},
		},
		{
			name: 'Receptive Telepathy',
			powers: ['sense'],
			required: ['Life Sense'],
			extra: [
				data.extra.keptUp +
					' if target is willing and proximity modifier doesn’t increase',
			],
			difficulty: {
				sense: {
					level: [
						{
							level: 1,
							text: 'for friendly, non-resisting targets',
						},
						{
							level: 'Perception or Control',
							text: 'if target resists',
						},
					],
					modifiers: [
						data.modifiers.proximity,
						data.modifiers.relationship,
					],
				},
			},
			effect: {
				short: [],
				long: `If the Jedi makes the power roll, he can read the surface thoughts and emotions of the target. The Jedi "hears" what the target is thinking, but cannot probe for deeper information. When used on another player, the gamemaster asks the player if he minds the power being used on him/her. If used on a gamemaster character the gamemaster decides if the target will resist.<br>
				If the skill’s roll is double the difficulty, the Jedi can shift through memories up to 24 hours old, though this takes two rounds. A Jedi cannot sift through memories in the same round that contact is made – this process takes a full round.<br>
				A Jedi can read the minds of more than one person at a time, but each additional person counts as an additional action, with separate rolls and multiple skill use penalties.<br>
				This power may be used on creatures and other sentient beings, although it cannot be used on droids.`,
			},
		},
		{
			name: 'Telekinesis',
			powers: ['alter'],
			extra: [data.extra.inSight, data.extra.keptUp],
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
					modifiers: [data.modifiers.proximity],
				},
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
			name: 'Transfer Force',
			powers: ['control', 'alter'],
			required: ['Control Pain', 'Control Another’s Pain'],
			timeToUse: data.time.minute,
			difficulty: {
				control: {
					level: [
						{
							level: 2,
						},
					],
					modifiers: [data.modifiers.relationship],
				},
				alter: {
					level: [
						{
							level: 3,
						},
					],
				},
			},
			effect: {
				short: [],
				long: `This power will save a mortally wounded character from dying because the Jedi is transferring her life force to the target. When a character has force transferred to him, he remains mortally wounded, but he will not die provided he isn’t injured again. The injured character is in hibernation and will stay alive in this state for up to six weeks. The Jedi must be touching the target character when the power is activated.<br>
				When this power is used, the user must spend a Force Point (this is the life force that is transferred to the target). This use is always considered heroic, so the character will get the Force Point back at the end of the adventure.<br>
				The recipient of this power must be willing.`,
			},
		},
		{
			name: 'Translation',
			powers: ['sense'],
			required: [
				'Receptive Telepathy',
				'Projective Telepathy',
				'Life Sense',
			],
			extra: [data.extra.keptUp],
			difficulty: {
				sense: {
					level: [
						{
							level: 3,
							text: 'for humans or aliens',
						},
						{
							level: 4,
							text: 'for droids',
						},
					],
					increased: [
						{
							add: '+5',
							text: 'if target is being purposely cryptic',
						},
						{
							add: '+20',
							text: 'if the language is written down',
						},
					],
				},
			},
			effect: {
				short: [],
				long: `The character may translate a language and speak it. The Jedi may decipher body language, explore the spoken word, or translate ancient Sith texts, etc. In order for this to work, the character must first hear the target speak, or see the works in written form (such as an ancient text or document). It takes only one application of this power to "understand" a language. As long as they all speak the same language and the power is kept up, the character need not roll for each individual talking. Also because they also "speak" using beeps and whistles, droids may be communicated with using this power.<br>
				Note that the character does not really know the language. Once this power is no longer in use, the Jedi is once again unable to understand or speak the language.`,
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
