<template>
	<div class="difficulty--container">
		<div class="power" v-for="(power, index) in skill.powers" :key="index">
			<div class="title">
				<span class="name">{{ powers.stats[power].name }}</span>
				<span class="dice" @click="copyRoll(power)">
					{{ getDice(power) }}
				</span>
			</div>
			<div class="details--container" v-if="skill.difficulty[power]">
				<!-- Base Difficulty -->
				<ul class="level--container">
					<li
						class="level-item"
						v-for="(item, index) in getDifficulty(power).level"
						:key="index"
					>
						<div
							class="level hover"
							v-html="getDifficultyLevel(item)"
						></div>
						<div class="text">
							{{ item.text }}
						</div>
					</li>
				</ul>
				<!-- Increased Difficulty -->
				<ul class="add--container" v-if="hasIncreasedDifficulty(power)">
					<li
						class="add-item"
						v-for="(item, index) in getDifficulty(power).increased"
						:key="index"
					>
						<div class="level">
							{{ item.add }}
						</div>
						<div class="text">
							{{ item.text }}
						</div>
					</li>
				</ul>
				<!-- Modifiers -->
				<ul class="modifiers--container" v-if="hasModifiers(power)">
					<li
						class="modifiers-item"
						v-for="(item, index) in getDifficulty(power).modifiers"
						:key="index"
					>
						<div
							class="level hover"
							v-html="getModifier(item)"
						></div>
					</li>
				</ul>
			</div>
		</div>
		<!-- Extra -->
		<ul class="extra" v-if="getExtra()">
			<li class="list-item" v-for="(item, index) in getExtra()" :key="index">
				{{ item }}
			</li>
		</ul>
		<!-- Time to Use -->
		<div class="timeToUse">
			<span class="title">Time to Use: </span>
			<span class="content">{{ getTimeToUse() }}</span>
		</div>
	</div>
</template>

<script>
import { powers, data } from "@/assets/zebron_kebino.js";

export default {
	props: {
		skill: {
			required: true,
		},
	},
	setup(props) {
		function getDifficulty(power) {
			if (props.skill.difficulty != null) {
				return props.skill.difficulty[power];
			}
			return [];
		}

		function getDifficultyLevel(item) {
			var levelTitle = "";
			var levelHover = "";
			switch (item.level) {
				case 1:
					levelTitle = "Very Easy";
					levelHover = item.hover ? item.hover : "1-5 or 1D";
					break;
				case 2:
					levelTitle = "Easy";
					levelHover = item.hover ? item.hover : "6-10 or 2D";
					break;
				case 3:
					levelTitle = "Moderate";
					levelHover = item.hover ? item.hover : "11-15 or 3D-4D";
					break;
				case 4:
					levelTitle = "Difficult";
					levelHover = item.hover ? item.hover : "16-20 or 5D-6D";
					break;
				case 5:
					levelTitle = "Very Difficult";
					levelHover = item.hover ? item.hover : "21-30 or 7D-8D";
					break;
				case 6:
					levelTitle = "Heroic";
					levelHover = item.hover ? item.hover : "31+ or 9D+";
					break;
				default:
					levelTitle = item.level;
					levelHover = item.hover;
					break;
			}
			return `<span title="${levelHover}">${levelTitle}</span>`;
		}

		function getModifier(item) {
			return `<span title="${item.hover}">${item.text}</span>`;
		}

		function hasIncreasedDifficulty(power) {
			if (getDifficulty(power).increased) return true;
			return false;
		}

		function hasModifiers(power) {
			if (getDifficulty(power).modifiers) return true;
			return false;
		}

		function hasExtra() {
			if (props.skill.extra) return true;
			return false;
		}

		function getExtra() {
			if (props.skill != null) {
				return props.skill.extra;
			}
			return [];
		}

		function getTimeToUse() {
			if (props.skill.timeToUse != null) {
				return props.skill.timeToUse;
			}
			return data.time.default;
		}

		function copyRoll(power) {
			const el = document.createElement("textarea");
			el.value = getRollCmd(power);
			document.body.appendChild(el);
			el.select();
			document.execCommand("copy");
			document.body.removeChild(el);
		}

		function getDice(power) {
			power = powers.stats[power];
			return `${power.dice}D+${power.pips}`;
		}

		function getRollCmd(power) {
			power = powers.stats[power];
			const name = power.name;
			var dice = power.dice ? power.dice : 0;
			var pips = power.pips ? power.pips : 0;

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
			powers,
			data,
			getDifficulty,
			getDifficultyLevel,
			getModifier,
			getDice,
			copyRoll,
			getExtra,
			getTimeToUse,
			hasIncreasedDifficulty,
			hasModifiers,
			hasExtra,
		};
	},
};
</script>

<style lang="scss" scoped>
.difficulty--container {
	.power {
		width: 100%;

		.title {
			margin-bottom: 1rem;

			.name {
				width: 100%;
				font-size: 1.2rem;
				font-weight: bold;
				margin-right: 0.4rem;
			}

			.dice {
				font-size: 0.8rem;
				font-weight: bold;
				cursor: pointer;
				transition: text-shadow 0.3s;

				&:hover {
					cursor: pointer;
					text-shadow: 1px 1px 2px gray;
				}
			}
		}

		.details--container {
			.level--container,
			.add--container,
			.modifiers--container {
				margin: 0;
				padding: 0;
				margin-bottom: 1rem;
				//list-style: none;

				.level-item,
				.add-item,
				.modifiers-item {
					display: flex;
					width: 100%;
					padding: 0.2rem 0 0.2rem 1.2rem;

					.level {
						width: 30%;
					}

					.hover {
						cursor: help;
					}

					.text {
						width: 70%;
					}
				}

				.modifiers-item {
					font-style: italic;
				}
			}
		}
	}

	.extra {
		list-style: none;
		padding: 0;
		font-style: italic;
		margin-top: 0;
	}

	.timeToUse {
		.title {
			font-weight: bold;
		}
	}
}
</style>