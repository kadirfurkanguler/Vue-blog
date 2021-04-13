<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-dark black ps-6">
            <div class="container-sm" >                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="row">
                    <div class="col-md-6 offset-1">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto">
                                <router-link tag="li" to="/" class="nav-item">
                                    <a class="nav-link active " aria-current="page" href="#">Home</a>
                                </router-link>
                                <router-link tag="li" to="/aboutus" class="nav-item">
                                    <a class="nav-link active " aria-current="page" href="#">About Us</a>
                                </router-link>
                                <router-link tag="li" to="/contact" class="nav-item">
                                    <a class="nav-link active " aria-current="page" href="#">Contact</a>
                                </router-link>
                            </ul>
                         </div>
                    </div>
                </div>
                    <span class="navbar-brand" href="#">
                        This Website Developed with <span class="text-success">VueJs</span> & <span class="text-primary">Vuetify</span>
                    </span> 
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
    }
</script>

<style  scoped>
.black{
    background-color: #000!important;
}
</style>