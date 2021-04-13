<template>
    <div id="about">
        <app-header></app-header>
        <v-container>
            <v-row>
                <v-col cols="10" offset-lg="2" lg="6" class="me-5 me-lg-0">
                    <div class="ps-2">
                                            <h3>About</h3>
                    <p class="py-5 yazi">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper,
                        dui in fermentum sodales, justo nisi molestie dui, vel dapibus felis turpis et nunc. 
                        Cras nec malesuada nunc, in molestie turpis. Etiam nec faucibus urna, sit amet consequat 
                        justo. Suspendisse ac augue at magna condimentum sodales volutpat eu nisl. Nam tristique
                        lorem mattis, tempus sem et, varius ipsum. Morbi at diam eget libero facilisis gravida. 
                        Pellentesque pretium id dolor id commodo.
                    </p>
                    <p class="py-5 yazi">
                        Nullam in lacus nec metus vulputate volutpat eget ut purus. Phasellus ac mollis sem,
                        ac aliquam nunc. Sed ut orci rhoncus, sodales nunc in, porta nisi. Curabitur sit amet lectus 
                        ac massa aliquam porttitor. Nulla facilisi. Phasellus tempus ipsum non dictum condimentum. 
                        Vestibulum tincidunt fermentum lorem. Donec at mi diam. In at egestas nulla, vel dictum libero.
                        Phasellus sem ipsum, fringilla quis semper nec, viverra sed nisi. Sed neque ligula, aliquet 
                        vitae arcu quis, porttitor iaculis dolor. In elementum odio eu turpis auctor, eu vehicula quam 
                        llamcorper. Ut non dapibus nisl. Nam varius iaculis mattis. Pellentesque mauris turpis, pharetra 
                        ommodo vulputate et, pharetra non augue.
                    </p>
                    <p class="py-5 yazi">
                      Nulla dapibus, ante non feugiat gravida, ante justo fermentum felis, ac euismod neque tortor 
                      sed tellus. Cras egestas augue dui, ut dapibus sapien sodales egestas. Phasellus convallis 
                      ipsum augue, lobortis imperdiet tellus pellentesque non. Sed tristique eleifend ultrices. D
                      onec dolor mi, sollicitudin ut tempor id, vehicula a diam. Proin eu mattis ipsum, vitae 
                      sollicitudin ligula. Cras eget feugiat mauris, nec pellentesque sem.  
                    </p>
                    <p class="py-5 yazi">
                        Curabitur egestas sit amet enim ut auctor. In hendrerit vulputate vehicula. 
                        Aliquam lectus lectus, ultrices vitae massa nec, gravida luctus lacus. Donec 
                        semper ligula ac tellus varius, eu bibendum erat molestie. Sed nec tempus ante.
                        Sed aliquam volutpat est, vitae dapibus turpis euismod eu. Curabitur vulputate 
                        elit sit amet nibh iaculis, vel placerat erat vulputate. Ut rutrum suscipit magna,
                        nec vestibulum leo hendrerit sed. Pellentesque vel commodo ligula, vel rutrum mi. 
                        Quisque pulvinar mauris a felis auctor rhoncus. Aenean ut risus mollis, facilisis 
                        nibh eget, egestas ipsum. Nulla tellus elit, lobortis et nisi in, malesuada semper
                        metus. Vestibulum lobortis massa vel elit dapibus interdum. Vestibulum molestie, 
                        massa a egestas accumsan, magna arcu malesuada magna, non placerat purus dolor a odio
                        . Sed nec dignissim urna.
                    </p>
                    <p class="py-5 yazi">
                        Proin accumsan bibendum sem, quis pretium urna tempus auctor. Proin bibendum fringilla
                        tortor sed rutrum. Curabitur ac magna felis. Nulla faucibus ligula vitae viverra cursus.
                        Ut ac tellus orci. In urna ligula, congue eget lacus nec, luctus aliquam mi. Maecenas 
                        aliquam ornare lacus vel interdum. Nullam semper nibh augue, eu tristique libero porta ac.
                        Proin ut metus velit. Duis faucibus vel quam vel gravida. Cras a condimentum sapien, eu 
                        sagittis metus. Sed vel porta odio. Sed gravida, urna vulputate mollis euismod, ante risus
                         ornare sapien, id hendrerit sapien arcu in libero. Aenean semper tempus leo eu rutrum
                    </p>
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
import yanbar from './yanbar'
    export default {
        components:{
            yanbar,
            appHeader:header,
        }
    }
</script>

<style scoped>
.yazi{
    font-family: 'Shippori Mincho B1', serif;
}
</style>
