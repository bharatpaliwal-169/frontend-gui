import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import ArticleCreate from './components/ArticleCreate';

class BaseRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={ArticleList} />{" "}
        <Route exact path="/articles/:articleID/" component={ArticleDetails} />
        <Route exact path="/create"  component={ArticleCreate}  />{" "}
      </React.Fragment>
    )
  }
}

export default BaseRouter;