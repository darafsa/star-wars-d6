<template>
	<div class="skill--container">
		<h1 class="title">{{ skill.name }}</h1>
		<div class="content">
			<div class="effect">
				<ul class="short list">
					<li
						class="list-item"
						v-for="(item, index) in getEffectShort()"
						:key="index"
					>
						{{ typeof item === "string" ? item : item[0] }}
						<ul v-if="(typeof item !== 'string')">
							<li v-for="i in item.length-1" :key="i">{{ item[i] }}</li>
						</ul>
					</li>
				</ul>
				<h3>Effect</h3>
				<p class="long" v-html="getEffectComplete()"></p>
				<div class="example" v-if="skill.example">
					<h3>Example</h3>
					<p v-html="skill.example.long"></p>
				</div>
			</div>
			<div class="details">
				<Difficulty :skill="skill" />
			</div>
		</div>
	</div>
</template>

<script>
import { powers } from "@/assets/zebron_kebino.js";
import Difficulty from "@/components/Zebron Kebino/Difficulty.vue";

export default {
	components: { Difficulty },
	props: {
		skill: {
			required: true,
		},
	},
	setup(props) {
		const test = "Test";

		function getEffectShort() {
			if (props.skill.effect != null) {
				if (props.skill.effect.short != null)
					return props.skill.effect.short;
			}
			return [];
		}

		function getEffectComplete() {
			if (props.skill.effect != null) {
				if (props.skill.effect.long != null) {
					return props.skill.effect.long;
				}
			}
			return "";
		}

		return {
			test,
			powers,
			getEffectShort,
			getEffectComplete,
		};
	},
};
</script>

<style lang="scss" scoped>
.skill--container {
	flex-direction: column;
	align-items: flex-start;
	padding-left: 3rem;

	.title {
		width: 100%;
		text-align: left;
	}

	.content {
		display: flex;
		flex-direction: row;
		width: 100%;

		.effect {
			text-align: left;
			width: 40%;

			.short {
				font-size: 1.2rem;
				margin-top: 0.6rem;

				.list-item {
					padding: 0.1rem 0 0.1rem 0;
				}
			}

			.long {
				font-size: 1.1rem;
			}

			.example {
				font-size: 1.1rem;
			}
		}

		.details {
			width: 60%;
			margin-left: 3rem;
			text-align: left;
		}
	}
}
</style>