import React, {Component} from 'react';
import './Homepage.css';
import PostOverview from "../PostOverview/PostOverview";
import {Box} from '@material-ui/core';

class Homepage extends Component {
  render() {
    return (
      <div id="homepage-container">
        <header>
          <h1 id="site-name">Reddit Clone</h1>
        </header>
        <Box>
            <PostOverview/>
        </Box>
      </div>
    );
  }
}

export default Homepage;