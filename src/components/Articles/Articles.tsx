import React from 'react'
import { FlatList } from 'react-native'
import ArticleRow from './ArticleRow'
import { ArticleType } from '../../models/article'

const Articles: ({ articles, fetchArticles }: {
  articles: ArticleType[];
  fetchArticles: (query: string) => {};
}) => JSX.Element = ({ articles, fetchArticles }) => (
  <FlatList
    data={articles}
    renderItem={ArticleRow}
    keyExtractor={(item: ArticleType) => `${item.id}`}
    onRefresh={() => fetchArticles('')}
    refreshing={false}
  />
)

export default Articles
