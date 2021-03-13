import React from 'react'
import { Image, Linking } from 'react-native'
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  H3,
  Button,
  Left,
  Right,
  Body,
} from 'native-base'
import { ArticleType } from '../../models/article'

const Article: ({ article }: {
  article: ArticleType
}) => JSX.Element = ({ article }) => {

  return (
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Body>
                <Text note>Author: {article.author}</Text>
              </Body>
            </Left>
            <Right>
              <Body>
                <Text note>{article.publishedAt}</Text>
              </Body>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{ uri: article.urlToImage }}
                style={{ height: 300, width: 300, flex: 1 }}
              />
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <H3>{article.description}</H3>
                <Text>{article.content}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Button
                transparent
                textStyle={{ color: '#87838B' }}
                onPress={() => Linking.openURL(article.url)}
              >
                <Text>{'Read more'}</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
}

export default Article
