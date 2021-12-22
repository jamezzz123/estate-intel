import { mount } from '@vue/test-utils'
import shapeItem from '@/components/shapeItem.vue'

describe('ShapeItem', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(shapeItem)
    expect(wrapper.vm).toBeTruthy()
  })
})
