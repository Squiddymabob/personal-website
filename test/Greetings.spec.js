import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import Vuetify from 'vuetify'
import Greetings from '@/components/Greetings.vue'

describe('Greetings.vue', () => {
  let localVue
  let vuetify
  let wrapper
  let stubs

  beforeEach(() => {
    localVue = createLocalVue() // Because of Vuetify use a localVue instance
    vuetify = new Vuetify()
    stubs = {
      NuxtContent: true
    }
  })

  it('renders content', () => {
    wrapper = shallowMount(Greetings, {
      localVue,
      vuetify,
      stubs
    })
    expect(wrapper.text()).toContain('Squiddymabob')
  })
})
