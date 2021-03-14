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
import { Translations } from '../../models/translations'

const Article: ({ article, translations }: {
  article: ArticleType
  translations: Translations
}) => JSX.Element = ({ article, translations }) => {
  return (
    <Container>
      <Content padder>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Body>
                <Text note>{translations.author}: {article.author}</Text>
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
                <Text>{translations.readMore}</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
}

export default Article
