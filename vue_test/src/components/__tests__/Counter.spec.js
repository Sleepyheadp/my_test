import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Counter from '../Counter.vue'

describe('Count', () => {
  it('test click event', () => {
    const wrapper = mount(Counter)
    wrapper.get('button').trigger('click')
    wrapper.get('button').trigger('click')
    console.log(wrapper.emitted())
    /* 两种方式验证是否有Increase方法 */
    // expect(wrapper.emitted()).toHaveProperty('increase')
    // expect(wrapper.emitted('increase')).toBeTruthy()
    expect(wrapper.emitted('increase')[0]).toEqual([
      {
        count: 1,
        remainder: false
      }
    ])
    expect(wrapper.emitted('increase')[1]).toEqual([
      {
        count: 2,
        remainder: true
      }
    ])
  })
})
