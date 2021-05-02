<template>
	<div class="container">
		<Dicer />
		<Navbar />
	</div>
</template>

<script>
import Dicer from "./Dicer.vue";
import Navbar from "./Navbar.vue";

export default {
	components: {
		Dicer,
		Navbar,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
</style>