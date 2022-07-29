<template>
    <div>
        <v-app-bar v-if="!end" flat style="background: transparent;">
            <v-toolbar-title>
                <a href="./" title="Home">
                    <strong>The missing designer</strong> <span class="grey--text">Clone</span>
                </a>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <div>
                <v-img id="logo" class="d-inline-block" :src="require('@/assets/img/logo.png')" width="20" height="20"/>
                <strong class="ml-2">{{ score }}</strong>
                </div>
        </v-app-bar>

        <v-app-bar v-else flat style="background: transparent;">
            <v-spacer></v-spacer>

            <v-toolbar-title>
                <a href="./" title="Home">
                    <strong>The missing designer</strong> <span class="text--secondary">Clone</span>
                </a>
            </v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>
    </div>
</template>


<script>
export default {
    name: 'Navbar',

    props: {
        score: Number,
        end: Boolean,
    },
};
</script>


<style scoped>
a:link, a:visited {
    color: white;
    text-decoration: none;
}

#logo {
    position: relative;
    top: 4px;
}
</style>