import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export class Article {
  articleId: string
  title: string
  image: string
  description?: string

  constructor(articleId: string, title: string, image: string, description?: string) {
    this.articleId = articleId
    this.title = title
    this.image = image
    this.description = description
  }
}

export interface Document {
  exitFullscreen: any
  mozCancelFullScreen: any
  webkitExitFullscreen: any
  fullscreenElement: any
  mozFullScreenElement: any
  webkitFullscreenElement: any
}
