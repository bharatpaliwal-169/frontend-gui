import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ArticlePost from './ArticlePost';

class ArticleList extends Component {
  state = {
    articles: [],
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/")
        .then(response => {
          this.setState({ 
            articles: response.data
          })
          console.log(response.data);
        })
  }
  
  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <Link to={"/create"} className="custom-head">
            Add Post
          </Link>
          <section className='col-12 col-sm-7 offset-sm-2'>
            {/* {data.map((item) => {
              return <ArticlePost {...item} /> 
            })} */}

          {this.state.articles.map((article) => {
            return <ArticlePost {...article} key={article.id} />
          })}

          </section>
        </div>
    </React.Fragment>
    );
  }
}

export default ArticleList;