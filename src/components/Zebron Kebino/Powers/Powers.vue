<template>
	<div class="powers--container">
		<ul class="list">
			<input class="list-item" placeholder="Search" :v-bind="data.search">
			<li class="list-item" :class="{ hover: skill.type != 'label', label: skill.type == 'label' }" v-for="(skill, index) in filterSkills()" :key="index" @click="showSkill(skill)">
				{{ skill.name }}
			</li>
		</ul>
		<Skill :skill="data.currentSkill" :class="{hidden: data.currentSkill === '', shown: data.currentSkill !== ''}"/>
	</div>
</template>

<script>
import { reactive } from 'vue';

import { powers } from "@/assets/zebron_kebino.js";
import Skill from "./Force Skill"

export default {
	components: {
		Skill
	},
	setup() {
		const data = reactive({
			currentSkill: "",
			search: ""
		})
		function getPowers(skill) {
			var str = "Powers: ";
			skill.powers.forEach(power => {
				str += powers.stats[power].name + " ";
			})
			return str;
		}

		function showSkill(skill) {
			if(skill.type != 'label')
				data.currentSkill = skill;
		}

		function filterSkills() {
			if(data.search == "") {
				return powers.skills
			} else {
				return 
			}
		}
		return {
			data,
			powers,
			getPowers,
			showSkill,
			filterSkills
		};
	},
};
</script>

<style lang="scss" scoped>
.hidden {
	color: transparent;
	width: 80%;
}
.shown {
	display: flex;
	width: 100%;
	transition: width 1s ease;
}

.powers--container {
	width: 100%;
	display: flex;
	flex-grow: 1;
	border: 1px solid black;

	.list {
		display: flex;
		flex-direction: column;
		list-style: none;
		text-align: left;
		margin: 0;
		padding: 0.5rem;
		padding-right: 2.5rem;
		background: rgb(219, 219, 219);

		.list-item {
			width: 100%;
			padding: 1rem;
		}

		input {
			border: 0;
		}

		.hover {
			cursor: pointer;
			transition: background 0.2s ease;

			&:hover {
				background: rgb(150, 150, 150);
			}
		}

		.label {
			font-weight: bold;
			font-size: 1.2rem;
		}
	}

	.current-skill {
		width: 100%;
	}
}
</style>