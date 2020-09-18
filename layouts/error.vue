<template>
  <v-app dark>
    <v-card>
      <v-card-title primary-title>
        <h1 v-if="error.statusCode === 404" class="text-h1 text-uppercase">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
      </v-card-title>
      <v-card-text> Oops! Looks like you took a wrong turn... </v-card-text>
      <v-card-actions>
        <v-btn color="primary" to="/"
          ><v-icon left>mdi-home</v-icon> Go back home</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
  export default {
    layout: 'empty',
    props: {
      error: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        pageNotFound: '404 Not Found',
        otherError: 'An error occurred',
      };
    },
    head() {
      const title =
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
      return {
        title,
      };
    },
  };
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }
</style>
