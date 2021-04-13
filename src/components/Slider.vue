<template>
    <div>
        <v-carousel>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            ></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            items:[
                {src:"https://cdn.pixabay.com/photo/2014/05/22/21/46/mixing-desk-351478_960_720.jpg"},
                {src:"https://cdn.pixabay.com/photo/2015/07/27/20/27/mockup-863469_960_720.jpg"},
                {src:"https://cdn.pixabay.com/photo/2020/01/18/15/01/music-4775509_960_720.jpg"}

            ]
        }
    },
    }
</script>

<style  scoped>

</style>