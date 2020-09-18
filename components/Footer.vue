<template>
  <v-footer app :absolute="true" :color="themeColor">
    <v-btn class="pa-1 mr-3" to="/" :color="themeColor" large text>
      <img :src="logo" alt="logo" width="100px"
    /></v-btn>
    <v-spacer></v-spacer>
    <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    data() {
      return {
        logo: '/img/logos/main-logo.svg',
        themeColor: this.$vuetify.theme.themes.dark.primary,
      };
    },
  });
</script>
