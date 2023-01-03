<template>
	<div class="stats--container">
		<div class="stats" v-for="(stat, index) in zebron" :key="index">
			<div class="flex-item">
				<div class="name main">{{ getName(stat) }}</div>
				<a class="copy main hover" @click="copyRoll(stat)">
					{{ getDice(stat) }}
				</a>
			</div>
			<div class="skills">
				<ul class="list">
					<li
						class="list-item"
						v-for="(skill, index) in stat.skills"
						:key="index"
					>
						<a
							class="name hover"
							@click="
								data.currentSkill = skill;
								data.currentStat = stat;
							"
							>{{ getName(skill) }}</a
						>
					</li>
				</ul>
				<ul class="list">
					<li
						class="list-item"
						v-for="(skill, index) in stat.skills"
						:key="index"
					>
						<a class="copy hover" @click="copyRoll(stat, skill)">
							{{ getDice(stat, skill) }}
						</a>
					</li>
				</ul>
			</div>
		</div>
		<StatInfo :stat="data.currentStat" :skill="data.currentSkill" v-if="data.currentSkill !== ''"/>
	</div>
</template>

<script>
import * as zebron from "@/assets/zebron_kebino.js";
import { reactive } from "vue";
import StatInfo from "./StatInfo";

export default {
	components: {
		StatInfo
	},
	setup() {
		const data = reactive({
			currentSkill: "",
			currentStat: "",
		});

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

		function getRoot() {
			console.log(data.currentSkill.root);
			return data.currentSkill.root;
		}

		const copyRoll = (stat, skill) => {
			copyToClipboard(getRollCmd(stat, skill));
		};

		function copyToClipboard(str) {
			const el = document.createElement("textarea");
			el.value = str;
			document.body.appendChild(el);
			el.select();
			document.execCommand("copy");
			document.body.removeChild(el);
		}

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

			var str = "";
			if (dice > 0) str += `${dice}d6+`;
			str += `1d6ie6#PIPS# !${name} (${dice + 1}D+${pips})`;

			str =
				pips > 0
					? str.replace("#PIPS#", `+${pips}`)
					: str.replace("#PIPS#", "");

			return str;
		}

		return {
			zebron: zebron.stats,
			data,
			getName,
			getDice,
			getRoot,
			getSuffix,
			copyRoll,
		};
	},
};
</script>

<style lang="scss" scoped>
.stats--container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 80%;
	border: 1px solid black;
	padding: 1.5rem 5% 1.5rem 5%;

	.stats,
	.stat-info {
		display: flex;
		flex-direction: column;
		text-align: left;
		margin: 0 1rem 0 1rem;

		.flex-item {
			display: flex;
			flex-direction: row;
			margin-bottom: 0.5rem;
			align-items: center;
			width: max-content;
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
		}

		.hover {
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