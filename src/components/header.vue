<template>
    <div>
            <v-row>               
                <v-col md="12" class="py-5 mx-auto text-center">
                     <img class="img-fluid my-5" src="https://3.bp.blogspot.com/-z-XayvyC5EA/WqLqpjJEMXI/AAAAAAAAEyA/n8ao3xwcKZYPxZ27PdnsEqF_2l5tccsRgCK4BGAYYCw/s1600/Lily.png" alt="">
                </v-col>              
            </v-row>
            <v-row>
                <v-col offset-md="2" md="8">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid fs-2" style="font-family: 'Akaya Telivigala', cursive;">
                        <div class="mx-lg-auto">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <router-link tag="li" class="nav-item mx-5"   active-class="active" to="/">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                            </router-link>
                            <li class="nav-item mx-5">
                            <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item mx-5">
                            <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item mx-5">
                            <a class="nav-link" href="#">More</a>
                            </li>
                            <li class="nav-item dropdown mx-5">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    </nav>
                </v-col>
            </v-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
fs-2{
   
}
</style>