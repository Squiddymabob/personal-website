<template>
  <v-container>
    <v-layout row wrap>
      <v-flex shrink mr-5>
        <v-icon>wb_sunny</v-icon>
      </v-flex>
      <v-flex shrink>
        <v-switch v-model="$vuetify.theme.dark" hide-details inset />
      </v-flex>
      <v-flex shrink>
        <v-icon>brightness_3</v-icon>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
 .v-input {
     padding: 0%;
     margin: 0%;
 }
</style>
