import React from 'react'
import { useState, useEffect } from 'react'
import { NativeRouter } from 'react-router-native'
import NewsFeed from './src'
import { ArticleType } from './src/models/article'
import { fetchTranslations } from './src/translations/index'

const App: () => JSX.Element = () => {
  const apiUrl = 'https://newsapi.org/v2'
  const apiKey = '4904a297062d46c59e955ebd0e7db5af'

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

  console.log('fetchTranslations', fetchTranslations('bg'))

  return (
    <NativeRouter>
      <NewsFeed
        fetchArticles={fetchArticles}
        articles={state}
        translations={fetchTranslations('bg')}
      />
    </NativeRouter>
  )
}

export default App
