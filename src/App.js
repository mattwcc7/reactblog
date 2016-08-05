//javascript version es 6

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  blogs
} from './blogs';

class BlogPost extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.blog.title }</h3>
        <hr/>
        <p>
          { this.props.blog.body }
        </p>
      </div>
    );
  }
}
class BlogFeed extends Component {
  getBlogPosts() {
    let blogs = [];
    for (let i = 0; i < this.props.blogs.length; i++) {
      let blog = this.props.blogs[i]
      blogs.push(<BlogPost blog={blog} />);
    }
    return blogs;
  }
  render() {
    let blogs = this.getBlogPosts();
    return (
      <div>
        { blogs }
      </div>
    )
  }
}


class App extends Component {
  getBlogPosts() {
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Matt's Blog</h2>
        </div>
        <p className="App-blogfeed">
          <BlogFeed blogs={ blogs } />
        </p>
      </div>
    );
  }
}

export default App;
