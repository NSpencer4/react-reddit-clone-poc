class PostService {
	getPosts() {
		return fetch("http://localhost:4000/post")
			.then(res => res.json())
			.catch((error) => {
				console.error(error)
			});
	}

	sendPost(title, body) {
		const data = {
			title: title,
			body: body
		};
		let reqOpts = {
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify(data),
			method: "POST"
		};
		console.dir(reqOpts);
		return fetch("http://localhost:4000/post", reqOpts)
			.then(res => res.json())
			.catch((error) => {
				console.error(error)
			});
	}
}

export default PostService;