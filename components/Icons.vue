<template>
  <v-card flat class="mt-6 px-4 transparent">
    <!-- Section title -->
    <div class="text-h3 mb-3 primary--text">
      {{ title }}
    </div>

    <!-- Section content -->
    <div class="px-5" :class="title === 'Technologies' ? 'text-center' : ''">
      <v-tooltip
        v-for="icon in icons"
        :key="icon.name"
        top
      >
        <template v-slot:activator="{ on }">
          <v-btn
            large
            fab
            icon
            :href="icon.link"
            class="mx-1"
            :disabled="!icon.link"
          >
            <img
              :src="getImagePath(icon.name)"
              width="60"
              height="60"
              v-on="on"
            >
          </v-btn>
        </template>
        <span>{{ icon.name }}</span>
      </v-tooltip>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    icons: {
      required: true,
      type: Array
    },
    title: {
      required: true,
      type: String
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
