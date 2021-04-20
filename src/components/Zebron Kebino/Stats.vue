<template>
	<div class="stats--container">
		<div class="stats" v-for="(stat, index) in stats" :key="index">
			<div class="flex-item">
				<div class="name main">{{ getName(stat) }}</div>
				<a class="copy main" @click="copyRoll(stat)">
					{{ getDice(stat) }}
				</a>
			</div>
			<div class="skills">
				<ul class="list">
					<li class="list-item" v-for="(skill, index) in stat.skills" :key="index">
						<div class="name">{{ getName(skill) }}</div>
					</li>
				</ul>
				<ul class="list">
					<li class="list-item" v-for="(skill, index) in stat.skills" :key="index">
						<a class="copy" @click="copyRoll(stat, skill)">
							{{ getDice(stat, skill) }}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { stats } from "@/assets/zebron_kebino.js";

export default {
	setup () {
		function getDice(stat, skill = {}) {
			const diceStat = stat.dice ? stat.dice : 0;
			const pipsStat = stat.pips ? stat.pips : 0;
			const diceSkill = skill.dice ? skill.dice : 0;
			const pipsSkill = skill.pips ? skill.pips : 0;
			if (skill.adv) return `${diceSkill}D+${pipsSkill}`;
			return `${diceSkill + diceStat}D+${pipsSkill + pipsStat}`;
		}

		function getSuffix(skill) {
			if (skill.spez) return "(s)";
			if (skill.adv) return "(A)";
			return "";
		}

		function getName(skill) {
			return `${skill.name} ${getSuffix(skill)}`;
		}

		const copyRoll = (stat, skill) => {
			const el = document.createElement("textarea");
			el.value = getRollCmd(stat, skill);
			document.body.appendChild(el);
			el.select();
			document.execCommand("copy");
			document.body.removeChild(el);
		};

		function getRollCmd(stat, skill = {}) {
			const diceStat = stat.dice ? stat.dice : 0;
			const pipsStat = stat.pips ? stat.pips : 0;
			const diceSkill = skill.dice ? skill.dice : 0;
			const pipsSkill = skill.pips ? skill.pips : 0;

			const name = skill.name ? skill.name : stat.name;

			var dice = diceSkill;
			var pips = pipsSkill;
			if (!skill.adv) {
				dice += diceStat;
				pips += pipsStat;
			}
			if (dice > 0) dice -= 1;

			var str = "!roll ";
			if (dice > 0) str += `${dice}d6+`;
			str += `1d6ie6#PIPS# !${name} (${dice + 1}D+${pips})`;

			str =
				pips > 0
					? str.replace("#PIPS#", `+${pips}`)
					: str.replace("#PIPS#", "");

			return str;
		}

		return {
			stats,
			getDice,
			getSuffix,
			getName,
			copyRoll,
		};
	}
}
</script>

<style lang="scss" scoped>
.stats--container {
	display: flex;
	flex-direction: row;
	align-items: flex-start;

	.stats {
		display: flex;
		flex-direction: column;
		text-align: left;
		margin: 0 1rem 0 1rem;

		.flex-item {
			display: flex;
			flex-direction: row;
			margin-bottom: 0.5rem;
			align-items: center;
		}

		.name {
			width: max-content;
		}

		.main {
			font-size: 1.1rem;
			font-weight: bold;
		}

		.copy {
			padding-left: 1rem;
			transition: text-shadow 0.3s;

			&:hover {
				cursor: pointer;
				text-shadow: 1px 1px 2px gray;
			}
		}

		.skills {
			display: flex;
			flex-direction: row;

			.list {
				list-style: none;
				text-align: left;
				margin-top: 0;
				padding-left: 1rem;
				width: max-content;

				.list-item {
					padding: 0.2rem 0 0.2rem 0;
				}
			}
		}
	}
}
</style>