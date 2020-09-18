<template>
  <v-app>
    <NavBar />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    mounted() {
      const currentTheme = localStorage.getItem('darkTheme');
      if (!currentTheme) {
        localStorage.setItem('darkTheme', String(this.$vuetify.theme.dark));
      } else {
        this.$vuetify.theme.dark = currentTheme === 'true';
      }
    },
  });
</script>
