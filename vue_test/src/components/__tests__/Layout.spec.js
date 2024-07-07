import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Layout from '../Layout.vue'

describe('Layout.vue', () => {
  it('test slot', () => {
    const wrapper = mount(Layout, {
      /* 
        slots除了接收"字符串"外，还可以接收"对象"，对象的key就是插槽的名字，value就是插槽的内容
        还可以接收component h->vnode
        default: "default div", // string
        default: "<div>default div</div>", // string
        default: Foo, // component
        default: { template: '<div>default div</div>' }, // object
        default: h('div', {}, 'default div'), // vnode
      */
      slots: {
        default: "<div id='default'>I'm default</div>",
        middle: "<div id='middle'>I'm middle</div>",
        footer: `<template #footer="props"><div id="footer">{{props.type}}</div></template>`
      }
    })
    // 默认插槽
    expect(wrapper.find('#default').text()).toContain("I'm default")
    // 具名插槽
    expect(wrapper.find('#middle').text()).toContain("I'm middle")
    // 作用域插槽
    expect(wrapper.find('#footer').text()).toContain('scoped')
  })
})
