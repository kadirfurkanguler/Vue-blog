<template>
    <div>
    <app-header></app-header>
    <v-container>
        <v-row>
            <v-col class="mx-auto" cols="12" md="9"> 
                <app-slider></app-slider>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
            <v-col cols="10" lg="6" offset-lg="2" class="me-5 me-lg-0">
                <div class="text-center">
                    <card v-for="(post,id) in  postlist" :key="id" :veri="post" />
                    <v-pagination
                    v-model="page"
                    :length="3"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                    >                   
                    </v-pagination>
                </div>
            </v-col>
            <v-col offset-md="2" offset-lg="0" lg="3">
                    <yanbar/>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import header from './header'
import slider from './Slider'
import yanbar from './yanbar'
import card from './card'
    export default {
    data() {
    return {
        page:1,
        postCount:10,
        //postlist:[],
    }
    },
    components:{
        appHeader:header,
        appSlider:slider,
        yanbar,card
    },
    methods: {
        async loadNews(){
            await this.$store.dispatch("loadPostList")
        }
    },
    computed:{
        postlist(){
            return this.$store.getters.getPostList
        }
    },
    async created() {
        await this.$store.dispatch("loadPostList")
        console.log("post listesiii")
        console.log(this.postlist)
    },
    watch:{

    }
    }
</script>

<style scoped>
</style>