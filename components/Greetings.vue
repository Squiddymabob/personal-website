<template>
  <v-card flat tile class="pa-6">
    <v-row class="text-center">
      <v-col cols="12 display-4">
        🦑
      </v-col>
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          {{ content.title }}
        </h1>
        <div class="subheading font-weight-regular">
          <nuxt-content :document="content" />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  async fetch () {
    this.content = await this.$content('greetings').fetch()
  },
  data () {
    return {
      content: ''
    }
  }
}
</script>
