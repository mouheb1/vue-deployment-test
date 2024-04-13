import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const { width } = useWindowSize()
  const { y } = useWindowScroll()
  const isMobile = computed(() => width.value < 768)
  const hasScrolled = computed(() => y.value > 0)

  return { hasScrolled, isMobile }
})
