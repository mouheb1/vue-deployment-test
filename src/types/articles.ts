class Article {
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

export { Article }
