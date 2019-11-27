import React, {Component} from 'react';
import './PostForm.css';
import Card from '@material-ui/core/Card';
import {CardHeader} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: {
        title: '',
        body: ''
      }
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(event) {
    if (event.target.id === 'form-title-field') {
      this.setState({
        formState: {
          title: this.state.formState.title,
          body: event.target.value
        }
      });
    } else if (event.target.id === 'form-body-field') {
      this.setState({
        formState: {
          title: event.target.value,
          body: this.state.formState.body
        }
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.dir(this.state.formState);
  }

	render() {
		return (
			<div id="post-form-container">
				<Card>
					<CardHeader title="Create a Post"/>
					<CardContent>
              <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <Grid container direction="row" >
                  <TextField id="form-title-field" label="Title" fullWidth={true} value={this.state.title} onChange={this.handleFormChange}/>
                </Grid>
                <Grid container direction="row">
                  <TextField id="form-body-field" label="Body" fullWidth={true} rows={5} multiline={true} value={this.state.body} onChange={this.handleFormChange}/>
                </Grid>
                <Grid container direction="row">
                  <Button variant="contained" color="primary" type="submit" value="Submit">
                    Submit
                  </Button>
                </Grid>
              </form>
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default PostForm;