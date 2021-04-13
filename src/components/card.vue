<template>
    <div>
<v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="1000"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="250"
      :src="veri.image"
    ></v-img>
    <v-card-title>{{veri.title}}</v-card-title>
    <v-card-text>
      <div class="my-4 subtitle-1">
        {{veri.source.title}} | {{veri.date}}
      </div>
      <div>{{veri.body.substr(0,120)}}...</div>
    </v-card-text>
  </v-card>
    </div>
</template>

<script>
    export default {
        props:["veri"]
    }
</script>

<style lang="scss" scoped>

</style>