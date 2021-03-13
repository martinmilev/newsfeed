import React, { Fragment } from 'react'
import { Route } from 'react-router-native'
import { Articles } from './components/Articles'
import { Article } from './components/Article'
import { Header } from './components/Header'
import { ArticleType } from './models/article'
import { Translations } from './models/translations'

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
    main: (props) => <Article article={props.history.location.state.article} {...props} />,
  },
]

const NewsFeed: ({ fetchArticles, articles, translations }: {
  fetchArticles: (query: string) => {}
  articles: ArticleType[]
  translations: Translations
}) => JSX.Element = ({ fetchArticles, articles, translations }) => {

  return (
    <Fragment>
      {routes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          render={(props) => (
            <Fragment>
              <route.header fetchArticles={fetchArticles} translations={translations} />
              <route.main
                articles={articles}
                fetchArticles={fetchArticles}
                translations={translations}
                history={props.history}
                {...props}
              />
            </Fragment>
          )}
        />
      ))}
    </Fragment>
  )
}

export default NewsFeed
