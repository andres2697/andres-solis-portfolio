import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'app',
  state: () => ({
    welcomeCounter: 1,
  }),
  actions: {
    setWelcomeCounter(value) {
      this.welcomeCounter = value
    },
  }
})