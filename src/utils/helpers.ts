const pathToIndex = (path: string) => {
  switch (path) {
    case '/':
      return 1
    case '/windows':
      return 2
    case '/doors':
      return 3
    case '/guardrail':
      return 5
    case '/works':
      return 6
    case '/contact':
      return 7
    default:
      return 1
  }
}

const isActiveNavItem = (index: number, path: string) => pathToIndex(path) === index

const scrollTo = (elementId?: string, offset = 0) => {
  if (elementId) {
    const target = document.getElementById(elementId)
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY
      // Calculate the final scroll position by adding the offset to the target position
      const finalScrollPosition = targetPosition + offset
      window.scrollTo({
        top: finalScrollPosition,
        behavior: 'smooth',
      })
      return
    }
  }
  // Scroll to top if elementId is not defined or target not found
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export { pathToIndex, isActiveNavItem, scrollTo }
