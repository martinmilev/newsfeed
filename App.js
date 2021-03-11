import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import {
  Content,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Header,
  Item,
  Input
} from 'native-base'

const App: () => React$Node = () => {
  const apiUrl = 'https://newsapi.org/v2'
  const apiKey = '4904a297062d46c59e955ebd0e7db5af'

  const [state, setState] = useState([])

  const fetchArtices = async (query) => {
    let url =
      query === ''
        ? `${apiUrl}/top-headlines?country=us&apiKey=${apiKey}`
        : `${apiUrl}/everything?q=${query}&apiKey=${apiKey}`

    let result = await fetch(url).then((response) => response.json())

    setState([])
    setState(result.articles)
  }

  useEffect(() => {
    fetchArtices('')
  }, [])

  return (
    <Fragment>
      <Header searchBar rounded>
        <Item>
          <Input
            placeholder='Search'
            onChangeText={(text) => fetchArtices(text)}
          />
        </Item>
      </Header>
      <FlatList
        data={state}
        renderItem={ArticleCard}
        keyExtractor={(item) => `${item.title}`}
        onRefresh={() => fetchArtices()}
        refreshing={false}
      />
    </Fragment>
  )
}

export default App

const ArticleCard = ({ item }) => (
  <Content>
    <Card>
      <CardItem>
        <Thumbnail square source={{ uri: item.urlToImage }} />
        <Text>{item.title}</Text>
      </CardItem>
    </Card>
  </Content>
)
