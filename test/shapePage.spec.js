import { mount ,shallowMount } from '@vue/test-utils'
import shape from '@/pages/shape.vue'


test('on colorClick method works correctly', () => {
    const wrapper = shallowMount(shape)
    wrapper.vm.colorClick('blue');
    expect(wrapper.vm.colorFilter).toContain('blue');  
})

test('on shapeClick method works correctly', () => {
    const wrapper = shallowMount(shape)
    wrapper.vm.shapeClick('triangle');
    expect(wrapper.vm.shapeFilter).toContain('triangle');  
})