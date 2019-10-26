import React, {Component} from 'react';
import {CardHeader} from '@material-ui/core';
import './PostOverview.css'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArticleService from '../../services/ArticleService';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

class PostOverview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			articles: []
		};
		this.articleService = new ArticleService();
	}

	componentDidMount() {
		this.articleService.getArticles().then((articles) => {
			this.setState({
				isLoaded: true,
				articles: articles
			});
		});
	}

	renderArticle(article, key) {
		return (
			<div className="post-overview-container" key={key}>
				<Card>
					<CardHeader title={article.title}/>
					<CardContent>
						<Grid container direction="row" spacing={4}>
							<Grid item xs={8}>
								<Typography>
									{article.content}
								</Typography>
							</Grid>
							<Grid item xs={4}>
								<img class="post-image" src="/logo192.png" title="Example img"></img>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</div>
		)
	}

	render() {
		let renderedArticles = [];
		if (this.state.isLoaded) {
			this.state.articles.forEach((article, index) => {
				renderedArticles.push(this.renderArticle(article, index));
			});
			return (renderedArticles);
		} else {
			return <div>Loading...</div>;
		}
	}
}

export default PostOverview;