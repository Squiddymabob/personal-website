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

  beforeEach(() => {
    localVue = createLocalVue() // Because of Vuetify use a localVue instance
    vuetify = new Vuetify()
  })

  it('renders content', () => {
    wrapper = shallowMount(Greetings, {
      localVue,
      vuetify
    })
    expect(wrapper.text()).toContain('UI design and improving user experience.')
  })
})
