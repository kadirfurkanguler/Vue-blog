<template>
    <div>
        <app-header></app-header>
        <v-container>
           <v-row>
               <v-col cols="12" lg="6" offset-lg="2">
                <v-row>
                    <v-col cols="12">
                        <h2>
                            {{post.title}}
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="mas text-center">
                        <img :src="post.firstImg" class="img-fluid" alt="">
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                    <p>
                        {{post.firstP}}
                    </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="9" class="mx-auto">
                        <img :src="post.secondImg" class="" alt="">
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                    <p>
                        {{post.secondP}}
                    </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" offset="9">
                        <p>
                            -{{post.author}}
                        </p>
                    </v-col>
                </v-row>                                     
               </v-col>
                <v-col cols="12" offset-lg="1" lg="3">
                   <yanbar/>
               </v-col>
           </v-row>
        </v-container>
    </div>
</template>

<script>
import header from './header'
import yanbar from './yanbar'
    export default {
        components:{
            appHeader:header,
            yanbar,

        },
        data() {
            return {
                post:{
                    title:'Handbags & Accessories: Totes, Clutches, Jewelry',
                    firstImg:'https://3.bp.blogspot.com/-OSpVTp0skAI/WKtGuy9EhVI/AAAAAAAAAM0/uM_4iKEl-7E-8eRQtU49DyDg_fqLDgIUACLcB/s320/DeathtoStock_Medium5-895x470.jpg',
                    firstP:'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                    secondImg:'https://3.bp.blogspot.com/-XBj_s948imM/VQ50eJj03KI/AAAAAAAAEeQ/JNyqc_MKdMY/s1600/117H-650x420.jpg',
                    secondP:'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis',
                    author:'Furkan Güler'
                },
                
            }
        },
    }
</script>

<style  scoped>
.mas{
    margin: 0 auto!important;
}
.mx-auto{
    margin: 0 auto!important;
}
</style>