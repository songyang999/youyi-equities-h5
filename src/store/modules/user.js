import { defineStore } from 'pinia'
import { store } from '@/store'

export const useUserStore = defineStore('user', {
  state: () => ({
    // 用户名
    username: '徐凯凯'
  }),
  actions: {
    /** 存储用户名 */
    SET_USERNAME(username) {
      this.username = username;
    }
  }
})
