import React from 'react'
import { Content, Card, CardItem, Thumbnail, Text } from 'native-base'
import { Link } from 'react-router-native'

const ArticleRow = ({ item }) => (
  <Link to={{ pathname: `/article/${item.id}`, state: { article: item } }} >
    <Content>
      <Card>
        <CardItem>
          <Thumbnail square source={{ uri: item.urlToImage }} />
          <Text>{item.title}</Text>
        </CardItem>
      </Card>
    </Content>
  </Link>
)

export default ArticleRow
