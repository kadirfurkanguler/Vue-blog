<template>
    <div>
        <v-container class="text-center">
            <v-row>
                <v-col cols="10" class="">
                    <div>
                        <div class="d-flex justify-space-between">
                        <hr class="d-inline-block">
                        <h3 class="d-inline">About Me</h3>
                        <hr class="d-inline-block">
                        </div>
                        <p class="text-center">
                            Merhaba, ben 2. sınıf bilgisayar mühendisliği öğrencisiyim. Kendimi web alanında geliştiriyorum. 20 yaşında freelance programcıyım.
                        </p>
                    </div>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col cols="10">
                    <div>
                        <div class="d-flex justify-space-between">
                        <hr class="d-inline-block">
                        <h5 class="d-inline mt-1">Furkan Güler</h5>
                        <hr class="d-inline-block">
                        </div>
                        <div class="mt-5">
                        <img src="https://i.hizliresim.com/aE6EM1.png" class="img-fluid rounded-circle" alt="">
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col cols="10" class="">
                    <div>
                        <div class="d-flex justify-space-between">
                        <hr class="d-inline-block">
                        <h3 class="d-inline">Follow us</h3>
                        <hr class="d-inline-block">
                        </div>
                        <v-row class="mt-5">
                            <v-col cols="6">
                                <button class="btn pt-2" style="background-color:#e72b61">                           
                                    <h6 class="text-light "> Instagram</h6>
                                </button>
                            </v-col>
                            <v-col cols="6">
                                 <button class="btn pt-2" style="background-color:#1A91DA">                           
                                    <h6 class=" text-light"> Twitter</h6>
                                </button>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <button class="btn pt-2" style="background-color:#0A82ED">                           
                                    <h6 class="text-light"> Facebook</h6>
                                </button> 
                            </v-col>
                            <v-col cols="6">
                                 <button class="btn pt-2" style="background-color:#FF0000">                           
                                    <h6 class="text-light"> Youtube</h6>
                                </button>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <button class="btn pt-2" style="background-color:#0A66C2">                           
                                    <h6 class="text-light"> Linkedin</h6>
                                </button>
                            </v-col>
                            <v-col cols="6">
                                 <button class="btn  pt-2" style="background-color:#24292E">                           
                                    <h6 class="text-light"> Github</h6>
                                </button>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col cols="10" class="mt-5">
                    <div>
                        <div class="d-flex justify-space-between mb-5">
                        <hr class="d-inline-block">
                        <h3 class="d-inline">Tags</h3>
                        <hr class="d-inline-block">
                        </div>
                        <button class="buton">Break</button>
                        <button class="buton">Food</button>
                        <button class="buton">Lifestyle</button>
                        <button class="buton">Slider</button>
                        <button class="buton">Sport</button>
                        <button class="buton">Technology</button>
                        <button class="buton">Travel</button>
                        <button class="buton">Vacation</button>
                        <button class="buton">Video</button>
                        <button class="buton">vimeo</button>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        

    }
</script>

<style scoped>
hr{
    width: 35px;
    height: 3px;
    background:black
}
.btn{
    width: 100px;
}
.btn:hover{
    background-color: yellowgreen !important;;
}
.buton{
    padding: 0.5rem;
    background-color: #ddd;
    margin: 0.5rem;
}
.buton:hover{
    background-color: orange;
    color: white;
}
</style>