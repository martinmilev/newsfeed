import React from 'react'
import { Content, Card, CardItem, Thumbnail, Text } from 'native-base'
import { Link } from 'react-router-native'

const ArticleRow = ({ item }) => (
  <Content>
    <Card>
      <CardItem>
        <Thumbnail square source={{ uri: item.urlToImage }} />
        <Link
          to={{ pathname: `/article/${item.id}`, state: { article: item } }}
        >
          <Text>{item.title}</Text>
        </Link>
      </CardItem>
    </Card>
  </Content>
)

export default ArticleRow
