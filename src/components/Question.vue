<template>
    <div>
        <v-row class="text-center">
			<v-col cols="12" sm="6">
                <v-img id="img" @click="retournerImage(choixQuestion[0])" class="mx-auto mr-sm-0" :src="require('@/assets/img/' + choixQuestion[0] + '.png')" width="300" height="200"/>
            </v-col>

            <v-col cols="12" sm="6">
                <v-img id="img" @click="retournerImage(choixQuestion[1])" class="mx-auto ml-sm-0" :src="require('@/assets/img/' + choixQuestion[1] + '.png')" width="300" height="200"/>
            </v-col>

			<v-col cols="12" class="mt-5"><strong>Choose an user-interface design that is more common in most websites and apps</strong></v-col>
		</v-row>
    </div>
</template>


<script>
export default {
    name: 'Question',

    props: {
        choixQuestion: Array,
    },

    methods: {
        retournerImage(imgSelectionnee) {
            this.$emit('imageCliked', imgSelectionnee);
        }
    }
};
</script>


<style scoped>
#img {
	cursor: pointer;
}
</style>
