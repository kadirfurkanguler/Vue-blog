<template>
  <v-app>
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import navbar from './components/navbar'
import footer from './components/Footer'
export default {
  name: 'App',

  components: {
    appNav:navbar,
    appFooter:footer,
  },

};


</script>
