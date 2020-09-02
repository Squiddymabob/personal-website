<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12>
      <Greetings />
    </v-flex>
    <v-flex xs12 xl9>
      <Icons
        :icons="[
          {name: 'JavaScript'},
          {name: 'Vue.js'},
          {name: 'React'},
          {name: 'HTML5'},
          {name: 'CSS3'},
          {name: 'Java'},
          {name: 'Python'},
          {name: 'Nuxt.js'},
          {name: 'Sass'},
          {name: 'Bootstrap'},
          {name: 'Git'},
          {name: 'Docker'},
          {name: 'AWS'},
          {name: 'VSCode'},
          {name: 'GIMP'},
          {name: 'AdobeXD'}
        ]"
        :title="'Technologies'"
      />
    </v-flex>
    <v-flex v-for="section in sections" :key="section" xs12 xl9>
      <ContentSection :section="section" />
    </v-flex>
    <v-flex xs12 xl9>
      <Icons
        :icons="[
          {name: 'LinkedIn', link: 'https://www.linkedin.com/in/emilydwhite/'},
          {name: 'Twitter', link: 'https://twitter.com/Squiddymabob'},
          {name: 'GitHub', link: 'https://github.com/Squiddymabob'},
          {name: 'Goodreads', link: 'https://goodreads.com/squiddymabob'},
        ]"
        :title="'Links'"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import Greetings from '~/components/Greetings.vue'
import ContentSection from '~/components/ContentSection.vue'
import Icons from '~/components/Icons.vue'

export default {
  components: {
    Greetings,
    ContentSection,
    Icons
  },
  data () {
    return {
      sections: [
        'projects',
        'experience/role1',
        'experience/role2',
        'experience/role3',
        'education'
      ]
    }
  },
  head () {
    return {
      title: 'Emily White'
    }
  }
}
</script>
