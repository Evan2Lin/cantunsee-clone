<template>
	<v-container>
		<!-- Question -->
		<app-question v-if="!reponse.imgSelectionnee" :choixQuestion="melangerChoix(questions[cptQuestion].choix)" @imageCliked="verifierReponse"/>

		<!-- Reponse -->
		<app-reponse v-else :reponse="reponse" @nextClick="next"/>
		
		<!-- Progess bar -->
		<v-progress-linear
			id="progress-bar"
			:value="pourcentageQuestion"
			height="35"
			:color="level.color"
		>
			<strong>{{ level.name }} {{ numQuestion }} / {{ questions.length }}</strong>
		</v-progress-linear>
	</v-container>
</template>


<script>
import { mapState } from 'vuex';

import AppQuestion from '@/components/Question';
import AppReponse from '@/components/Reponse';

export default {
	name: 'Game',

	components: {
		AppQuestion,
		AppReponse,
	},

	computed: {
		...mapState([
			'levels'
		]),
		pourcentageQuestion() {
			return this.cptQuestion / this.levels[this.cptLevel].questions.length * 100;
		}
	},

	created() {
		this.level = { 
			name: this.levels[this.cptLevel].name,
			points: this.levels[this.cptLevel].points,
			color: this.levels[this.cptLevel].color
		};
		this.questions = this.levels[this.cptLevel].questions;
	},

	data() {
		return {
			dateDebut: null,
			cptLevel: 0,
			cptQuestion: 0,
			numQuestion: 1,
			level: null,
			questions: null,
			reponse: { win: null, imgSelectionnee: null, imgComparee: null, help: null },
		};
	},

	methods: {
		verifierReponse(imgSelectionnee) {
			// On demarre le chrono si ce n'est pas deja fait
			this.dateDebut = this.dateDebut === null ? new Date() : this.dateDebut;

			if (imgSelectionnee == this.questions[this.cptQuestion].reponse) {
				this.reponse.win = true;
				this.$emit('pointsChange', this.level.points);
			} else {
				this.reponse.win = false;
			}

			this.reponse.imgSelectionnee = imgSelectionnee;

			if (this.questions[this.cptQuestion].choix[0] !== imgSelectionnee) {
				this.reponse.imgComparee = this.questions[this.cptQuestion].choix[0];
			} else {
				this.reponse.imgComparee = this.questions[this.cptQuestion].choix[1];
			}

			this.reponse.help = this.questions[this.cptQuestion].help;
			
			this.cptQuestion++;
			
		},
		next() {
			if (this.numQuestion !== this.questions.length) {
				// S'il reste des questions pour le niveau en cours
				this.numQuestion++;
				this.reponse = { win: null, imgSelectionnee: null, imgComparee: null, help: null };
			} else if (this.cptLevel + 1 !== this.levels.length) {
				// S'il reste encore des niveaux

				// On reinitilise variables
				this.cptLevel++;
				this.cptQuestion = 0,
				this.numQuestion = 1,
				// On melange aleatoirement questions
				this.questions = this.melangerTableau(this.levels[this.cptLevel].questions);
				this.level = { 
					name: this.levels[this.cptLevel].name,
					points: this.levels[this.cptLevel].points,
					color: this.levels[this.cptLevel].color
				};
				this.reponse = { win: null, imgSelectionnee: null, imgComparee: null, help: null };
				// On demarre le chrono si ce n'est pas deja fait
				// this.dateDebut = this.dateDebut === null ? new Date() : this.dateDebut;
			} else {
				// Si plus de niveaux et de questions disponibles
				const chrono = Math.abs(new Date() - this.dateDebut);
				this.$emit('isEnded', chrono);
			}
		},
		melangerTableau(tab) {
			// Algorithme de Fisher
			let i, j, temp;
			for (i = tab.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				temp = tab[i];
				tab[i] = tab[j];
				tab[j] = temp;
			}

			return tab;
		},
		melangerChoix(tab) {
			return this.level.name !== 'Tutorial' ? this.melangerTableau(tab) : tab;
		}
	},
};
</script>


<style>
#img {
	border-radius: 8px;
}

#progress-bar {
	position: absolute;
	width: 90%;
	max-width: 400px;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
	border-radius: 2em;
	margin-bottom: 1.5em;
}
</style>