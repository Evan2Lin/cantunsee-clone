<template>
	<v-app :style="{ backgroundColor: bgMainStyle }">
		<app-navbar class="px-sm-5" :score="score" :end="end"/>

		<v-content class="mt-sm-12">
			<!-- Jeu -->
			<app-game v-if="!end" @pointsChange="updatePoints" @isEnded="finishGame" style="margin-bottom: 5em;"/>
			<!-- Fin du jeu -->
			<app-end v-else :score="score" :chrono="chrono"/>
		</v-content>

		<app-footer/>
	</v-app>
</template>


<script>
import AppNavbar from './components/Navbar';
import AppFooter from './components/Footer';
import AppGame from './components/Game';
import AppEnd from '@/components/End';

export default {
	name: 'App',

	components: {
		AppNavbar,
		AppFooter,
		AppGame,
		AppEnd,
	},

	computed: {
		bgMainStyle() {
			return this.end === true ? '#62448C' : '#2E2E2E';
		}
	},

	created() {
		this.$vuetify.theme.dark = true
		document.documentElement.style.backgroundColor = '#2E2E2E';
		document.documentElement.style.overflow = 'auto';
	},

	data() {
		return {
			score: 0,
			end: false,
			chrono: null,
		};
	},

	methods: {
		// updatePoints(pointsGagnes) {
		// 	this.score += pointsGagnes;
		// },

		updatePoints() {
			this.score += 0;
		},
		finishGame(chrono) {
			this.chrono = chrono;
			this.end = true;
			// Changer couleur arriere plan
			document.documentElement.style.backgroundColor = '#62448C';
			// Bloquer le defilement
			document.documentElement.style.overflow = 'hidden';
		}
	}
};
</script>


<style>
body {
	min-height: 100vh !important;
}
</style>
