<template>
  <v-card flat class="pa-6 transparent">
    <v-row class="text-center">
      <v-col cols="12 display-4">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <span
              v-on="on"
            >
              🦑
            </span>
          </template>
          <span>Squiddymabob</span>
        </v-tooltip>
      </v-col>
      <v-col>
        <div class="text-h2 mb-3">
          {{ content.title }}
        </div>
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
