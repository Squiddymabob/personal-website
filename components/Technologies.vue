<template>
  <v-card flat class="mt-6 px-4 transparent">
    <!-- Section title -->
    <div class="text-h3 mb-3 primary--text">
      Technologies
    </div>

    <!-- Section content -->
    <div class="px-5 text-center">
      <img
        v-for="technology in technologies"
        :key="technology"
        :src="getImagePath(technology)"
        width="100"
        height="100"
      >
    </div>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      technologies: ['javascript']
    }
  },
  methods: {
    getImagePath (imageName) {
      const images = require.context('../assets/images/', false, /\.svg$/)
      return images('./' + imageName + '.svg')
    }
  }
}
</script>
