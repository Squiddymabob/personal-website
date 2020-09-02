<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <Greetings />
      <ContentSection v-for="section in sections" :key="section" :section="section" />
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
      sections: ['projects', 'links']
    }
  }
}
</script>
