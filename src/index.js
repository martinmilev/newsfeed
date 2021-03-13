import React, { Fragment } from 'react'
import { Route } from 'react-router-native'
import { Header, Item, Input} from 'native-base'
import { Articles } from './components/Articles'
import { Article } from './components/Article'

const routes = [
  {
    path: '/',
    exact: true,
    header: (props) => (
      <Header searchBar rounded>
        <Item>
          <Input
            placeholder='Search'
            onChangeText={(text) => props.fetchArticles(text)}
          />
        </Item>
      </Header>
    ),
    main: (props) =>  <Articles {...props} />
  },
  {
    path: '/article/:id',
    header: (props) => (
      <Header></Header>
    ),
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
                <route.header
                  history={props.history}
                  fetchArticles={fetchArticles}
                />
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
