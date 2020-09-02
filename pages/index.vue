<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <Greetings />
    </v-flex>
  </v-layout>
</template>

<script>
import Greetings from '~/components/Greetings.vue'

export default {
  components: {
    Greetings
  }
}
</script>
