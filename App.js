import React from 'react'
import { ScrollView } from 'react-native'
import { Content, Card, CardItem, Text, Thumbnail } from 'native-base'

const App: () => React$Node = () => {
  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png'

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
