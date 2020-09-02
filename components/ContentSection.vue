<template>
  <v-card flat class="pt-6 px-4 transparent">
    <div class="text-h3 mb-2">
      {{ content.title }}
    </div>

    <!-- Formatiing for experience section -->
    <div v-if="section.includes('experience')">
      <div class="px-5 pt-5">
        <div class="text-subtitle-1">
          {{ content.company }}
        </div>
        <div class="text-h5 mb-2">
          {{ content.role }}
        </div>
        <div class="text-caption">
          {{ content.location }}
        </div>
        <div class="text-subtitle-1">
          {{ content.dates }}
        </div>
      </div>

      <!-- Expansion panel content -->
      <v-expansion-panels flat class="mt-2 px-5">
        <v-expansion-panel>
          <v-expansion-panel-header
            :color="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
            class="text-subtitle-2 font-weight-bold primary--text"
          >
            Details
            <template v-slot:actions>
              <v-icon color="primary">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content
            :color="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <nuxt-content :document="content" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div v-else class="px-5 pt-5">
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

<style scoped>
.v-expansion-panel-header {
    padding: 0px 12px;
    min-height: 38px;
}
</style>
