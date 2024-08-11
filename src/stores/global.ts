import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const route = useRoute()
  const { width } = useWindowSize()
  const { y } = useWindowScroll()
  const isMobile = computed(() => width.value < 768)
  const hasScrolled = computed(() => y.value > 0)
  const isAtHomePage = computed(() => route.path === '/')
  const isAtContactPage = computed(() => route.path === '/contact')

  return { hasScrolled, isMobile, isAtHomePage, isAtContactPage }
})

export const userExpiresAt = useStorage<string>('userExpiresAt', null)
export const hideNewsletterUntil = useStorage<string>('hideNewsletterUntil', null)
