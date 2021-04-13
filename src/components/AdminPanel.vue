<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Admin</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" @click="activeComp='aadd'">
                    <a class="nav-link active">Add Post</a>
                    </li>
                    <li class="nav-item" @click="activeComp='adel'">
                    <a class="nav-link">Delete Post</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <component :is="activeComp"></component>
    </div>
</template>

<script>
import aadd from './add'
import adel from './del'
    export default {
        data() {
            return {
                activeComp:'add'
                
            }
        },
        components:{
            aadd,
            adel
        }
    }
</script>

<style  scoped>

</style>