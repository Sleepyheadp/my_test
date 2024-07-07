// 测试渲染组件
import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Foo from '../Foo.vue'
import { describe } from 'vitest'

/* describe('Foo.vue', () => {
  it('mount', () => {
    const wrapper = mount(Foo)
    console.log(wrapper.text())
    // expect(wrapper.text()).toBe('Foo')
  })
}) */
/* describe('Foo.vue', () => {
  it('shallowMount', () => {
    const wrapper = shallowMount(Foo)
    console.log(wrapper.text())
    // expect(wrapper.text()).toBe('Foo')
  })
}) */

describe('Foo.vue', () => {
  /* get:用于获取一定存在的元素 */
  it('get element a', () => {
    const wrapper = mount(Foo)
    // get方法获取的元素必须是一定存在的
    const profile = wrapper.get('#profile')
    expect(profile.text()).toBe('My Profile')
  })
  /* find:用于查找元素是否存在 */
  it('(v-if)Determine if an element exists - false', () => {
    const wrapper = mount(Foo)
    const admin = wrapper.find('#admin')
    expect(admin.exists()).toBe(false) // 默认是不存在的,admin=false
  })
  // find方法的第二个参数是一个对象,可以传入一个data对象,用于设置data属性
  it('(v-if)Determine if an element exists - true', () => {
    const wrapper = mount(Foo, {
      data() {
        return {
          admin: true
        }
      }
    })
    const userDropdown = wrapper.find('#user-dropdown')
    expect(userDropdown.exists()).toBe(true)
  })
  it('(v-show)Determines if an element is visible - false', () => {
    const wrapper = mount(Foo)
    const userDropdown = wrapper.find('#user-dropdown')
    expect(userDropdown.isVisible()).toBe(false)
  })
})
