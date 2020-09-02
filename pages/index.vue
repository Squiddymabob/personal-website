<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12>
      <Greetings />
    </v-flex>
    <v-flex
      v-for="section in sections"
      :key="section"
      xs12
      xl10
    >
      <ContentSection :section="section" />
    </v-flex>
  </v-layout>
</template>

<script>
import Greetings from '~/components/Greetings.vue'
import ContentSection from '~/components/ContentSection.vue'

export default {
  components: {
    Greetings,
    ContentSection
  },
  data () {
    return {
      sections: ['projects', 'experience', 'links']
    }
  }
}
</script>
