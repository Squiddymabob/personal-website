<template>
  <v-card flat class="mt-6 px-4 transparent">
    <!-- Section title -->
    <div class="text-h3 mb-3 primary--text">
      {{ content.title }}
    </div>

    <!-- Formatiing for experience and education sections -->
    <div v-if="section.includes('experience') || section.includes('education')" class="px-5">
      <div class="text-subtitle-1 secondary--text">
        {{ content.company }}
      </div>
      <div class="text-h5">
        {{ content.role }}
      </div>
      <div class="text-caption accent--text">
        {{ content.location }}
      </div>
      <div class="text-subtitle-1 info--text">
        {{ content.dates }}
      </div>
      <!-- Expansion panel content -->
      <v-expansion-panels v-if="section.includes('experience')" flat class="mt-2 mb-2">
        <v-expansion-panel>
          <v-expansion-panel-header
            :color="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
            class="text-subtitle-2 font-weight-bold primary--text"
          >
            Details
            <template v-slot:actions>
              <!-- Custom expansion panel icon -->
              <v-icon color="primary">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <!-- Section content -->
          <v-expansion-panel-content
            :color="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          >
            <nuxt-content :document="content" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <!-- Section content -->
    <div v-else class="px-5">
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
