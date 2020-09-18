<template>
  <v-btn color="toggle-btn" icon @click="toggleDarkMode">
    <v-icon>mdi-brightness-4</v-icon>
  </v-btn>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    methods: {
      toggleDarkMode() {
        localStorage.setItem('darkTheme', String(!this.$vuetify.theme.dark));
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      },
    },
  });
</script>
