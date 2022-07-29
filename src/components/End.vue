<template>
    <v-row class="text-center">
        <!-- Score -->
        <v-col cols="12" align-self="center" class="display-2">
            <v-img id="logo" class="d-inline-block" :src="require('@/assets/img/logo.png')" width="60" height="60"/>
            <strong class="mx-2">{{ score }}</strong>
        </v-col>

        <!-- Chrono -->
        <v-col cols="12" class="subtitle-1">Completed in <strong>{{ formaterDate(new Date(chrono)) }}</strong></v-col>

        <!-- Rejouer -->
        <v-col cols="12" class="mt-12"><v-btn light large href="./">Play again</v-btn></v-col>
    </v-row>
</template>


<script>
export default {
    name: 'End',

    props: {
        score: Number,
        chrono: Number,
    },

    methods: {
        formaterDate(date) {
            // Heures
            let hours = date.getHours() - 1
            hours = hours < 10 ? '0' + hours : hours;

            // Minutes
            let minutes = date.getMinutes()
            minutes = minutes < 10 ? '0' + minutes : minutes;
            
            // Secondes
            let secondes = date.getSeconds()
            secondes = secondes < 10 ? '0' + secondes : secondes;

            return hours + ":" + minutes + ":" + secondes
        },
    },
};
</script>


<style scoped>
#logo {
    position: relative;
    top: 13px;
}
</style>