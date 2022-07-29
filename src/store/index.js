import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		levels: [
			{
				name: 'Tutorial',
				points: 10,
				color: '#0098FF',
				questions: [
					{ choix: ['img1', 'img2'], reponse: 'img1', help: 'Description will appear here' },
					{ choix: ['img3', 'img4'], reponse: 'img4', help: 'Icons, fonts, shapes' },
					{ choix: ['img5', 'img6'], reponse: 'img6', help: 'Speech bubble padding'},
				],
			},
			{
				name: 'Problem set 1 : ',
				points: 100,
				color: '#0098F0',
				questions: [
					{ choix: ['img7', 'img8'], reponse: 'img7', help: 'Photo aspect ratio' },
					{ choix: ['img11', 'img12'], reponse: 'img11', help: 'Price tag contrast' },
					{ choix: ['img15', 'img16'], reponse: 'img16', help: 'Photo aspect ratio' },
					{ choix: ['img19', 'img20'], reponse: 'img19', help: 'One button with default style' },
					{ choix: ['img23', 'img24'], reponse: 'img23', help: 'Activity indicator color' },
				]
			},
			{
				name: 'Problem set 2 : ',
				points: 0,
				color: '#009800',
				questions: [
					{ choix: ['img29', 'img30'], reponse: 'img29', help: 'Icon contrast' },
					{ choix: ['img31', 'img32'], reponse: 'img32', help: 'Button caption contrast' },
					{ choix: ['img39', 'img40'], reponse: 'img40', help: 'Destructive action button color' },
					{ choix: ['img41', 'img42'], reponse: 'img42', help: 'Placeholder text capitalization' },
					{ choix: ['img45', 'img46'], reponse: 'img45', help: 'Contrast' },
				],
			},
			{
				name: 'Problem set 3 : ',
				points: 150,
				color: '#851CFF',
				questions: [
					{ choix: ['img63', 'img64'], reponse: 'img63', help: 'Font weight' },
					{ choix: ['img65', 'img66'], reponse: 'img65', help: 'Icon tint color' },
					{ choix: ['img47', 'img48'], reponse: 'img47', help: 'Spacing between title and subtitle' },
					{ choix: ['img51', 'img52'], reponse: 'img51', help: 'Button background' },
					{ choix: ['img55', 'img56'], reponse: 'img56', help: 'Skip button capitalization' },
				],
			},
			{
				name: 'Problem set 4 : ',
				points: 200,
				color: '#ff1f5d',
				questions: [
					{ choix: ['img69', 'img70'], reponse: 'img70', help: 'Price tag alignment' },
					{ choix: ['img71', 'img72'], reponse: 'img72', help: 'Border radius' },
					{ choix: ['img73', 'img74'], reponse: 'img74', help: 'Search icon size' },
					{ choix: ['img75', 'img76'], reponse: 'img76', help: 'Vertical content alignment' },
					{ choix: ['img79', 'img80'], reponse: 'img80', help: 'Subtitle typography' },

				],
			},
			{
				name: 'Problem set 5 : ',
				points: 0,
				color: '#ff1f5d',
				questions: [
					{ choix: ['img93', 'img94'], reponse: 'img94', help: 'Typo in text block' },
					{ choix: ['img95', 'img96'], reponse: 'img96', help: 'Search icon resolution' },
					{ choix: ['img97', 'img98'], reponse: 'img97', help: 'Button shapes' },
					{ choix: ['img105', 'img106'], reponse: 'img106', help: 'Skip button font weight' },
					{ choix: ['img111', 'img112'], reponse: 'img112', help: 'Placeholder text baseline' },
				],
			},
		]
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	},
});
