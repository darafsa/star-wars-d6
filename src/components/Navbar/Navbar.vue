<template>
	<nav
		class="navbar"
		:class="{ large: size.desktop, medium: size.tablet, small: size.phone }"
		v-click-away="hideNavlist"
		tabindex="0"
		@keyup.esc="hideNavlist"
	>
		<Navbutton
			@toggle-navlist="toggleNavlist"
			class="nav-component"
			v-if="size.phone"
		/>
		<Title class="nav-component nav-title" @hide-navlist="hideNavlist" />
		<Searchbar class="nav-component nav-searchbar" v-if="!size.phone" />
		<div class="nav-component" v-if="!size.desktop"></div>
		<Navlist
			class="nav-component nav-list"
			:navlistVisible="data.navlistVisible"
			@hide-navlist="hideNavlist"
		/>
	</nav>
</template>

<script>
//import Navbutton from "./Navbutton";
//import Title from "./Title";
//import Searchbar from "./Searchbar";
//import Navlist from "./Navlist";
//import { useStore } from "vuex";
import { reactive } from "vue";

export default {
	components: {
		//Title,
		//Searchbar,
		//Navlist,
		//Navbutton,
	},
	setup() {

		const data = reactive({
			navlistVisible: false,
		});

		function toggleNavlist() {
			data.navlistVisible = !data.navlistVisible;
		}

		function hideNavlist() {
			data.navlistVisible = false;
		}

		return {
			data,
			toggleNavlist,
			hideNavlist,
		};
	},
};
</script>

<style lang="scss" scoped>
.navbar {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	height: auto;
	padding: 0.5rem 1.2rem 0.5rem 1.2rem;
	position: sticky;
}

.large {
	.nav-component {
		min-width: 28.5%;
	}

	.nav-searchbar {
		margin: auto;
	}
}

.medium {
	.nav-component {
		min-width: 28.5%;
	}

	.nav-searchbar {
		margin: auto;
	}

	.nav-list {
		width: 100%;
	}
}

.small {
	.nav-component {
		min-width: 4rem;
	}

	.nav-title {
		margin: auto;
	}

	.nav-list {
		width: 100%;
	}
}
</style>