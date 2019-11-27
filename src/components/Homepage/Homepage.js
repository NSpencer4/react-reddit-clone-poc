import React, {Component} from 'react';
import './Homepage.css';
import PostOverview from "../PostOverview/PostOverview";
import {Box} from '@material-ui/core';
import PostForm from '../PostForm/PostForm';

class Homepage extends Component {
  render() {
    return (
      <div id="homepage-container">
        <header>
          <h1 id="site-name">Reddit Clone</h1>
        </header>
        <Box>
          <PostForm/>
          <PostOverview/>
        </Box>
      </div>
    );
  }
}

export default Homepage;