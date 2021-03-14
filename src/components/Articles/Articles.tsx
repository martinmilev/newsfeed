import React from 'react'
import { FlatList } from 'react-native'
import ArticleRow from './ArticleRow'
import { Container } from 'native-base'
import { ArticleType } from '../../models/article'

const Articles: ({ articles, fetchArticles }: {
  articles: ArticleType[];
  fetchArticles: (query: string) => {};
}) => JSX.Element = ({ articles, fetchArticles }) => (
  <Container>
    <FlatList
      data={articles}
      renderItem={ArticleRow}
      keyExtractor={(item: ArticleType) => `${item.id}`}
      onRefresh={() => fetchArticles('')}
      refreshing={false}
    />
  </Container>
)

export default Articles
