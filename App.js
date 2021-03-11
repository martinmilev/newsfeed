import React from 'react'
import { useState, useEffect } from "react";
import { ScrollView } from 'react-native'
import { Content, Card, CardItem, Text, Thumbnail } from 'native-base'

const App: () => React$Node = () => {
  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png'

  var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=bg&' +
          'apiKey=2ba583d7861040c4990efa916a04351d';
  var req = new Request(url);

  const [state, setState] = useState([])

  const fetchArtices = async () => {
    let result = await fetch(url).then(response => response.json())
    console.log('result.articles', result.articles)
    setState(result.articles)
  }

    useEffect(()  => { fetchArtices() }, [])

  return (
    <>
      <ScrollView>
        <Content>
          <Card>
            <CardItem>
              <Thumbnail square source={{ uri }} />
              <Text>News Headline 1</Text>
            </CardItem>
          </Card>
        </Content>
      </ScrollView>
    </>
  )
}

export default App
