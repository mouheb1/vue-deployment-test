const pathToIndex = (path: string) => {
  switch (path) {
    case '/':
      return 1
    case '/windows':
      return 2
    case '/Aluminum-shutters':
      return 3
    default:
      return 1
  }
}

const isActiveNavItem = (index: number, path: string) => pathToIndex(path) === index

const scrollTo = (elementId: string, offset = 0) => {
  const target = document.getElementById(elementId)
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY
    // Calculate the final scroll position by adding the offset to the target position
    const finalScrollPosition = targetPosition + offset
    window.scrollTo({
      top: finalScrollPosition,
      behavior: 'smooth',
    })
  }
}

export { pathToIndex, isActiveNavItem, scrollTo }
