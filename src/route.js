import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import Error from './components/Error';
class BaseRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={ArticleList} />
          <Route path="/:articleID" component={ArticleDetails} />
          <Route  component={Error} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default BaseRouter;