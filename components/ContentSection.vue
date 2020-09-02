<template>
  <v-card flat class="pa-6 transparent">
    <div class="text-h3 mb-3">
      {{ content.title }}
    </div>
    <div class="subheading font-weight-regular">
      <nuxt-content :document="content" />
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    section: {
      required: true,
      type: String
    }
  },
  async fetch () {
    this.content = await this.$content(this.section).fetch()
  },
  data () {
    return {
      content: ''
    }
  }
}
</script>
