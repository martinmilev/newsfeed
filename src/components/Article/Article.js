import React from 'react'
import { Image } from 'react-native'
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

const Article = ({ article }) => (
  <Container>
    <Content>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Body>
              <Text note>{article.author}</Text>
            </Body>
          </Left>
          <Right>
            <Body>
              <Text note>{new Date().toUTCString(article.publishedAt)}</Text>
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
            <Button transparent textStyle={{ color: '#87838B' }}>
              <Text>{article.url}</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    </Content>
  </Container>
)

export default Article
