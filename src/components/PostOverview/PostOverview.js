import React, {Component} from 'react';
import {CardHeader} from '@material-ui/core';
import './PostOverview.css'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PostService from '../../services/PostService';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

class PostOverview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			posts: []
		};
		this.postService = new PostService();
	}

	componentDidMount() {
		this.postService.getPosts().then((posts) => {
			this.setState({
				isLoaded: true,
				posts: posts
			});
		});
	}

	renderPost(post, key) {
		return (
			<div className="post-overview-container" key={key}>
				<Card>
					<CardHeader title={post.title}/>
					<CardContent>
						<Grid container direction="row" spacing={4}>
							<Grid item xs={8}>
								<Typography>
									{post.body}
								</Typography>
							</Grid>
							<Grid item xs={4}>
								<img className="post-image" src="/logo192.png" title="Example img"></img>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</div>
		)
	}

	render() {
		let renderedPosts = [];
		if (this.state.isLoaded) {
			this.state.posts.forEach((post, index) => {
				renderedPosts.push(this.renderPost(post, index));
			});
			return (renderedPosts);
		} else {
			return <div>Loading...</div>;
		}
	}
}

export default PostOverview;