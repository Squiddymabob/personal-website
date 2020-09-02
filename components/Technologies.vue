<template>
  <v-card flat class="mt-6 px-4 transparent">
    <!-- Section title -->
    <div class="text-h3 mb-3 primary--text">
      Technologies
    </div>

    <!-- Section content -->
    <div class="px-5 text-center">
      <v-tooltip
        v-for="technology in technologies"
        :key="technology"
        top
      >
        <template v-slot:activator="{ on }">
          <img
            :src="getImagePath(technology)"
            width="60"
            height="60"
            class="mx-2"
            v-on="on"
          >
        </template>
        <span>{{ technology }}</span>
      </v-tooltip>
    </div>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      technologies: [
        'JavaScript',
        'Vue.js',
        'React',
        'HTML5',
        'CSS3',
        'Java',
        'Python',
        'Nuxt.js',
        'Sass',
        'Bootstrap',
        'Git',
        'Docker',
        'AWS',
        'VSCode',
        'GIMP',
        'AdobeXD'
      ]
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
