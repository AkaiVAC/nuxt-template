<template>
  <v-layout>
    <v-flex class="text-center">
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
        <h2>{{ authStuff }}</h2>
      </blockquote>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    asyncData({ app }) {
      return {
        authStuff: app.$auth.$storage.getUniversal('userDetails'),
      };
    },
  });
</script>
