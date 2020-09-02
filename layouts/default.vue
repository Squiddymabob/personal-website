<template>
  <v-app>
    <v-main>
      <DarkModeToggle />
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import DarkModeToggle from '~/components/DarkModeToggle.vue'

export default {
  components: {
    DarkModeToggle
  }
}
</script>
