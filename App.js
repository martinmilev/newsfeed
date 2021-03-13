import React from 'react'
import { useState, useEffect } from 'react'
import { NativeRouter } from 'react-router-native'
import NewsFeed from './src'

const App: () => React$Node = () => {
  const apiUrl = 'https://newsapi.org/v2'
  const apiKey = '4904a297062d46c59e955ebd0e7db5af'

  const [state, setState] = useState([])

  const fetchArticles = async (query) => {
    let url = `${apiUrl}/top-headlines?country=us&apiKey=${apiKey}`
    if (!query) {
      url = `${apiUrl}/everything?q=${query}&apiKey=${apiKey}`
    }

    const result = await fetch(url).then((response) => response.json())
    const articles = result.articles.map((item, i) => ({ ...item, id: i + 1 }))

    setState([...articles])
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <NativeRouter>
      <NewsFeed fetchArticles={fetchArticles} articles={state} />
    </NativeRouter>
  )
}

export default App
