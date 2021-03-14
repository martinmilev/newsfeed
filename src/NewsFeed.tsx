import React, { Fragment } from 'react'
import { Route } from 'react-router-native'
import { StyleProvider } from 'native-base'
import { SettingsConsumer } from './context/SettingsContext'
import { Articles } from './components/Articles'
import { Article } from './components/Article'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Settings } from './components/Settings'
import { ArticleType } from './models/article'

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
  {
    path: '/settings',
    main: (props) => <Settings {...props} />,
  },
]

const NewsFeed: ({ fetchArticles, articles }: {
  fetchArticles: (query: string) => {}
  articles: ArticleType[]
}) => JSX.Element = ({ fetchArticles, articles, }) => {

  return (
    <Fragment>
      {routes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          render={(props) => (
            <SettingsConsumer>
              {({ translations, theme }) => (
                <StyleProvider style={theme}>
                  <Fragment>
                    <Header fetchArticles={fetchArticles} translations={translations} />
                    <route.main
                      articles={articles}
                      fetchArticles={fetchArticles}
                      translations={translations}
                      history={props.history}
                      {...props}
                    />
                    <Footer
                      history={props.history}
                      translations={translations}
                    />
                  </Fragment>
                </StyleProvider>
              )}
            </SettingsConsumer>
          )}
        />
      ))}
    </Fragment>
  )
}

export default NewsFeed
