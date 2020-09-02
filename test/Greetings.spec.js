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

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    wrapper = shallowMount(Greetings, {
      localVue,
      vuetify,
      propsData: { msg }
    })
    expect(wrapper.text()).toContain('Squiddymabob')
  })
})
