<template>
  <div>
    <v-app-bar app :color="color" dark>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-btn class="pa-1 mr-3" to="/" :color="color" text depressed large>
        <img src="/img/logos/main-logo-short.svg" alt="Logo" width="50px" />
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <DarkThemeToggle class="mr-2 hidden-sm-and-down" />
      <v-btn class="hidden-sm-and-down mr-3" text v-if="$auth.loggedIn">
        <v-icon left>mdi-account</v-icon>
        Hello, {{ userData.givenName }}!
      </v-btn>
      <AuthComponent class="hidden-xs-and-down" />
    </v-app-bar>
    <v-navigation-drawer dark v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="primary">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ userData.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2 d-flex">
          <DarkThemeToggle />
          <v-spacer />
          <AuthComponent />
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: this.$config.title,
        color: this.$vuetify.theme.themes.dark.primary,
        drawer: false,
        userData: this.$auth.$storage.getUniversal('userDetails'),
      };
    },
  };
</script>
