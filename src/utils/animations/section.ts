// Function to handle intersection
const animateSection = (entries: any[]) => {
  entries.forEach((entry: { isIntersecting: any, target: { classList: { add: (arg0: string) => void } } }) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate') // Add animation class
    }
  })
}

// IntersectionObserver directive
const intersectionObserver = new IntersectionObserver(animateSection, {
  threshold: 0.1, // Trigger when 10% of the element is visible
})

// Custom directive
const vIntersectionObserver = {
  mounted(el: Element) {
    intersectionObserver.observe(el)
  },
  unmounted(el: Element) {
    intersectionObserver.unobserve(el)
  },
}

export { vIntersectionObserver, animateSection }
