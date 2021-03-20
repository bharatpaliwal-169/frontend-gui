import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import ArticleForm from './components/ArticleForm';

class BaseRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={ArticleList} />{" "}
        <Route exact path="/articles/:articleID/" component={ArticleDetails} />
        <Route exact path="/create"  component={ArticleForm}  />{" "}
      </React.Fragment>
    )
  }
}

export default BaseRouter;