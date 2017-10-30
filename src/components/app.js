import React, { Component } from 'react';
import PostList from '../containers/post-list';
import PostDetail from '../containers/post-detail';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <PostList />
        <PostDetail />
      </div>
    );
  }
}
