<template>
  <v-app>
    <v-main class="mb-6">
      <DarkModeToggle />
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer class="transparent">
      <span class="accent--text">&copy; {{ new Date().getFullYear() }} Emily White</span>
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
