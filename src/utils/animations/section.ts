// Function to handle intersection
const animateSection = (entries: any[]) => {
  entries.forEach((entry: { isIntersecting: any, target: { classList: { add: (arg0: string) => void } } }) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate') // Add animation class
    }
  })
}

export { animateSection }
