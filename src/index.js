import React, { Fragment } from 'react'
import { Route } from 'react-router-native'

import { Articles } from './components/Articles'
import { Article } from './components/Article'
import { Header } from './components/Header'

const routes = [
  {
    path: '/',
    exact: true,
    header: (props) => <Header {...props} />,
    main: (props) => <Articles {...props} />,
  },
  {
    path: '/article/:id',
    header: (props) => <Header {...props} />,
    main: (props) => <Article article={props.history.location.state.article} />,
  },
]

const NewsFeed = ({ fetchArticles, articles }) => {
  return (
    <Fragment>
      {routes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          render={(props) => {
            return (
              <Fragment>
                <route.header fetchArticles={fetchArticles} />
                <route.main
                  articles={articles}
                  fetchArticles={fetchArticles}
                  {...props}
                />
              </Fragment>
            )
          }}
        />
      ))}
    </Fragment>
  )
}

export default NewsFeed
