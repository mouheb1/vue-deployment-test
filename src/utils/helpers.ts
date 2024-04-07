export function pathToIndex(path: string) {
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

export const isActiveNavItem = (index: number, path: string) => pathToIndex(path) === index
