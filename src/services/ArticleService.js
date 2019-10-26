class ArticleService {
  getArticles() {
    return fetch("/mock-data/posts.json")
      .then(res => res.json())
      .catch((error) => {
        console.error(error)
      });
  }
}

export default ArticleService;