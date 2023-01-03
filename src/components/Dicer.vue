<template>
	<div class="dicer--container">
		<span class="title">Nicer Dicer</span>
		<div class="generator">
			<input
				class="dice"
				id="dice"
				name="dice"
				type="number"
				v-model="generate.dice"
				placeholder="1"
				@keyup.enter="generateRoll()"
				min="1"
				oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
			/>D+
			<input
				class="pips"
				id="pips"
				name="pips"
				type="number"
				v-model="generate.pips"
				placeholder="0"
				@keyup.enter="generateRoll()"
				min="0"
				max="2"
				oninput="this.value = this.value.replace(/[^0-2.]/g, '').replace(/(\..*)\./g, '$1');"
			/>
			<input
				class="comment"
				id="comment"
				name="comment"
				v-model="generate.comment"
				placeholder="Reason"
				@keyup.enter="generateRoll()"
			/>
			<button class="generate" @click="generateRoll()">Generate</button>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue';
export default {
	setup() {
		const generate = reactive({
			dice: "",
			pips: "",
			comment: "",
		});

		function generateRoll() {
			const comment = generate.comment;
			var dice = Number(generate.dice);
			var pips = Number(generate.pips);

			if (dice > 0) dice -= 1;

			var str = "";
			if (dice > 0) str += `${dice}d6+`;
			str += `1d6ie6#PIPS# !${comment} (${dice + 1}D+${pips})`;

			str =
				pips > 0
					? str.replace("#PIPS#", `+${pips}`)
					: str.replace("#PIPS#", "");

			copyToClipboard(str);
		}

		function copyToClipboard(str) {
			const el = document.createElement("textarea");
			el.value = str;
			document.body.appendChild(el);
			el.select();
			document.execCommand("copy");
			document.body.removeChild(el);
		}

		return {
			generate,
			generateRoll
		};
	},
};
</script>

<style lang="scss" scoped>
.dicer--container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;

	.title {
		width: 100%;
		font-weight: bold;
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	.generator {
		border: 1px solid rgb(170, 170, 170);
		padding: 0.5rem;
		border-radius: 10px;

		.dice,
		.pips {
			width: 1rem;
			-webkit-appearance: none;
			-moz-appearance: textfield;
			margin: 0;
		}

		.comment {
			margin-left: 1rem;
			width: 7rem;
		}

		.generate {
			margin-left: 2rem;
		}
	}
}
</style>