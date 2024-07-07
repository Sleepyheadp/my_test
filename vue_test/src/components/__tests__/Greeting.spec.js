import { describe, it, expect } from 'vitest'
import Greeting from '../Greeting.vue'
import { mount } from '@vue/test-utils' // vtu

describe('Greeting', () => {
  // it 第一个参数是描述,第二个参数是回调函数,回调函数中写测试代码
  it('render a greeting', () => {
    const wrapper = mount(Greeting, {})
    // expect 断言,toBe 是匹配器,判断是否相等
    expect(wrapper.text()).toBe('Hello Vue and TDD')
  })
})
