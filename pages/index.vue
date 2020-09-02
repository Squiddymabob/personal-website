<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12>
      <Greetings />
    </v-flex>
    <v-flex xs12 xl9>
      <Technologies />
    </v-flex>
    <v-flex v-for="section in sections" :key="section" xs12 xl9>
      <ContentSection :section="section" />
    </v-flex>
  </v-layout>
</template>

<script>
import Greetings from '~/components/Greetings.vue'
import ContentSection from '~/components/ContentSection.vue'
import Technologies from '~/components/Technologies.vue'

export default {
  components: {
    Greetings,
    ContentSection,
    Technologies
  },
  data () {
    return {
      sections: [
        'projects',
        'experience/role1',
        'experience/role2',
        'experience/role3',
        'education',
        'links'
      ]
    }
  }
}
</script>
