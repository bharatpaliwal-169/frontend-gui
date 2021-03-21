import React, { Component } from 'react';
import axios from 'axios';
import ArticleForm from './ArticleForm';

class ArticleDetails extends Component {

  state ={
    article: {}
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`)
        .then(response => {
          this.setState({ 
            article: response.data
          })
          // console.log(response.data);
        })
  }
  render() {
    return (
      <React.Fragment>
        <div key={this.state.article.id} className='card'>
          <h1 className='card-header'>{this.state.article.title}</h1>
          <p className='card-body'>{this.state.article.content}</p>
        </div>
        <div className='col-12 col-sm-10'>
          <h4> Update article </h4>
            <ArticleForm requestType='put' articleID={this.state.article.id} btnText='Update Article'/>
        </div>
      </React.Fragment>
    );
  }
}

export default ArticleDetails;