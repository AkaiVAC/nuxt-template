<template>
  <div>
    <v-btn light v-if="!$auth.loggedIn" @click="$auth.loginWith('aad-msal2')">
      <v-icon left>mdi-login</v-icon>
      Login
    </v-btn>
    <v-btn light v-else @click="$auth.logout('aad-msal2')">
      <v-icon left>mdi-logout</v-icon>
      Logout
    </v-btn>
  </div>
</template>
