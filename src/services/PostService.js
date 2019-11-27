class PostService {
  getPosts() {
    return fetch("http://localhost:4000/post")
      .then(res => res.json())
      .catch((error) => {
        console.error(error)
      });
  }
}

export default PostService;