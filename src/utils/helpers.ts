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

export { scrollTo }
