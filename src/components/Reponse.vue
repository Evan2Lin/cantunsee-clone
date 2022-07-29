<template>
    <div>
        <v-row class="text-center">
			<!-- <v-col cols="12">
                <v-badge v-if="!showCompare" bottom overlap :color="badgeStyle.color" :icon="badgeStyle.icon">
                    <v-img id="img" class="mx-auto" :src="require('@/assets/img/' + reponse.imgSelectionnee + '.png')" width="300" height="200"/>
                </v-badge>

                <v-badge v-else bottom overlap :color="badgeStyleInverted.color" :icon="badgeStyleInverted.icon">
                    <v-img id="img" class="mx-auto" :src="require('@/assets/img/' + reponse.imgComparee + '.png')" width="300" height="200"/>
                </v-badge>
            </v-col> -->
			<v-col cols="12" class="my-3"><em>{{ reponse.help }}</em></v-col>

            <!-- Boutons -->
            <v-col cols="12" class="text-center">
                <!-- <v-btn class="mr-4 d-none d-sm-inline"
                    @mousedown="showCompare = true"
                    @mouseup="showCompare = false"
                    color="#62448C"
                    large
                >
                    Compare
                </v-btn> -->
                <v-btn class="ml-sm-4" @click="$emit('nextClick')" color="#62448C" large>Next</v-btn>
            </v-col>
		</v-row>
    </div>
</template>


<script>
export default {
    name: 'Reponse',

    props: {
        reponse: Object,
    },

    data() {
        return {
            showCompare: false,
            successBadge: { color: 'green', icon: 'mdi-check'},
            errorBadge: { color: 'red', icon: 'mdi-close'},
        };
    },

    computed: {
        badgeStyle() {
            return this.reponse.win ? this.successBadge : this.errorBadge;
        },
        badgeStyleInverted() {
            return this.reponse.win ? this.errorBadge : this.successBadge;
        }
    }
};
</script>


<style>
.v-badge__badge {
    inset: calc(100% - 20px) auto auto calc(100% - 20px) !important;
    height: auto !important;
    border-radius: 30px !important;
}

.v-badge__badge .v-icon {
    font-size: 30px !important;
}

/* Screen < 599px */
@media screen and (max-width: 599px) {
    .v-badge__badge {
        inset: calc(100% - 20px) auto auto calc(50% - 20px) !important;
    }
}
</style>