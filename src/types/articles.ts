class Article {
  articleId: string
  title: string
  image: string
  link: string
  description?: string

  constructor(articleId: string, title: string, image: string, link: string, description?: string) {
    this.articleId = articleId
    this.title = title
    this.image = image
    this.link = link
    this.description = description
  }
}

export { Article }
