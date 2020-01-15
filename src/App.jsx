import React from 'react';
import { Route, Switch } from 'react-router-dom';
import signUpContainer from './containers/signUpContainer';
import loginContainer from './containers/loginContainer';
import listArticlesContainer from './containers/listArticlesContainer';
import articleContainer from './containers/articleContainer';
import createArticle from './components/Articles/CreateArticleComponent'

import './App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup" exact component={signUpContainer} />
        <Route path="/login" exact component={loginContainer} />
        <Route path="/articles" exact component={listArticlesContainer} />
        <Route path="/articles/:id" exact component={articleContainer} />
        <Route path="/create" exact component={createArticle} />
      </Switch>
    </div>
  );
}

export default App;
