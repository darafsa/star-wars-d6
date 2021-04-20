<template>
	<div class="container">
		<h1>{{ data.name }}</h1>
		<ul class="nav">
			<a class="item" @click="showStats()">Stats</a>
			<a class="item" @click="showPowers()">Powers</a>
			<a class="item" @click="showBackground()">Background</a>
		</ul>
		<Stats class="content-item" v-show="data.stats" />
		<Background class="content-item" v-show="data.background" />
		<Powers class="content-item" v-show="data.powers"/>
	</div>
</template>

<script>
import { reactive } from "vue";
import Stats from "./Zebron Kebino/Stats";
import Background from "./Zebron Kebino/Background";
import Powers from "./Zebron Kebino/Powers";

export default {
	components: {
		Stats,
		Background,
		Powers,
	},
	setup() {
		const data = reactive({
			name: "Zebron Kebino",
			stats: true,
			background: false,
		});

		function showStats() {
			data.stats = true;

			data.powers = false;
			data.background = false;
		}

		function showPowers() {
			data.powers = true;

			data.stats = false;
			data.background = false;
		}

		function showBackground() {
			data.background = true;

			data.stats = false;
			data.powers = false;
		}

		return {
			data,
			showStats,
			showPowers,
			showBackground,
		};
	},
};
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;

	.nav {
		display: flex;
		flex-direction: row;
		width: max-content;
		padding: 0;

		.item {
			margin: 0 1rem 0 1rem;
			transition: text-shadow 0.2s;

			&:hover {
				cursor: pointer;
				text-shadow: 1px 1px 2px gray;
			}
		}
	}
}
</style>