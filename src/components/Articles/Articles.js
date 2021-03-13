import React from 'react'
import { FlatList } from 'react-native'
import ArticleRow from './ArticleRow'

const Articles = ({ articles, fetchArticles }) => {
  console.log(articles)

  return (
  <FlatList
    data={articles}
    renderItem={ArticleRow}
    keyExtractor={(item) => `${item.id}`}
    onRefresh={() => fetchArticles()}
    refreshing={false}
  />
)
  }

export default Articles
