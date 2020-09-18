<template>
  <p>Please wait...</p>
</template>
<script>
  import Vue from 'vue';
  import jwt_decode from 'jwt-decode';
  export default Vue.extend({
    created() {
      try {
        const decodedBearer = jwt_decode(
          this.$auth.$storage.getUniversal(
            `_token.${this.$auth.$state.strategy}`
          )
        );
        this.$auth.$storage.setUniversal('jwt_decoded', decodedBearer);
        const user = {
          name: decodedBearer.name,
          givenName: decodedBearer.given_name,
          familyName: decodedBearer.family_name,
          email: decodedBearer.unique_name,
        };
        this.$auth.$storage.setUniversal('userDetails', user);
      } catch (error) {
        console.error(error);
      }
    },
  });
</script>
