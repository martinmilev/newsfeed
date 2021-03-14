import React from 'react'
import { useState, useEffect } from 'react'
import { NativeRouter } from 'react-router-native'
import NewsFeed from './src'
import { ArticleType } from './src/models/article'
import { SettingsProvider } from './src/context/SettingsContext'

const App: () => JSX.Element = () => {
  const apiUrl = 'https://newsapi.org/v2'
  const apiKey = '2ba583d7861040c4990efa916a04351d'

  const [state, setState] = useState([])

  const fetchArticles = async (query: string) => {
    let url = `${apiUrl}/top-headlines?country=us&apiKey=${apiKey}`
    if (query !== '') {
      url = `${apiUrl}/everything?q=${query}&apiKey=${apiKey}`
    }

    const result = await fetch(url).then((response) => response.json())
    const articles = result.articles
      ? result.articles.map((item: ArticleType, i: number) => {
        return {
          ...item,
          id: i + 1,
          publishedAt: new Date(item.publishedAt).toDateString(),
        }
      })
      : []

    setState([...articles])
  }

  useEffect(() => {
    fetchArticles('')
  }, [])

  return (
    <NativeRouter>
      <SettingsProvider>
        <NewsFeed
          fetchArticles={fetchArticles}
          articles={state}
        />
      </SettingsProvider>
    </NativeRouter>
  )
}

export default App
