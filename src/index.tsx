import React, { Fragment } from 'react'
import { Route } from 'react-router-native'
import { Articles } from './components/Articles'
import { Article } from './components/Article'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ArticleType } from './models/article'
import { Translations } from './models/translations'

const routes = [
  {
    path: '/',
    exact: true,
    main: (props) => <Articles {...props} />,
  },
  {
    path: '/article/:id',
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
              <Header fetchArticles={fetchArticles} translations={translations} />
              <route.main
                articles={articles}
                fetchArticles={fetchArticles}
                translations={translations}
                history={props.history}
                {...props}
              />
              <Footer path={props.location.pathname} translations={translations}  />
            </Fragment>
          )}
        />
      ))}
    </Fragment>
  )
}

export default NewsFeed
