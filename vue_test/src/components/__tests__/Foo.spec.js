// 测试渲染组件
import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Foo from '../Foo.vue'
import { describe } from 'vitest'

describe('Foo.vue', () => {
  it('mount', () => {
    const wrapper = mount(Foo)
    console.log(wrapper.text())
    // expect(wrapper.text()).toBe('Foo')
  })
})
describe('Foo.vue', () => {
  it('shallowMount', () => {
    const wrapper = shallowMount(Foo)
    console.log(wrapper.text())
    // expect(wrapper.text()).toBe('Foo')
  })
})
