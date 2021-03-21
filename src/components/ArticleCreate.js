import React, { Component } from 'react';
import ArticleForm from './ArticleForm';

class ArticleCreate extends Component {

  render() {
    return (
      <div>
        <h4>Add a new Article</h4>
        <ArticleForm requestType='post' articleID={null} btnText='Create Article' />
      </div>
    );
  }
}

export default ArticleCreate;