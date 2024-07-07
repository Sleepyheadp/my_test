import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Password from '../Password.vue'

describe('Password.vue', () => {
  it('test props', async () => {
    const wrapper = mount(Password, {
      props: {
        minLength: '10'
      }
    })
    await wrapper.get('input').setValue(' ')

    // 我们有两种判断方法:
    //1. 第一种是判断div错误提示框的内容是否为'words at least > 10'
    expect(wrapper.find('#notice').text()).toContain('10')
    //2. 第二种是判断error是否为true
    // 下面两种写法都可以
    // expect(wrapper.vm.error).toBe(true)
    expect(wrapper.find("[data-test='error']").exists()).toBe(true)
  })
})
