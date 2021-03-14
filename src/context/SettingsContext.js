import React, { createContext, useState } from 'react'
import { fetchTranslations } from '../translations'
import { fetchTheme } from '../themes'

export const Context = createContext()
export const SettingsConsumer = Context.Consumer

const SettingsProvider = ({ children }) => {
  const [state, setState] = useState({ language: 'en', theme: 'day' })
  const updateLanguage = language => setState({ ...state, language })
  const switchTheme = theme => setState({ ...state, theme })
    return (
      <Context.Provider
        value={{
          language: state.language,
          updateLanguage: updateLanguage,
          translations: fetchTranslations(state.language),
          switchTheme: switchTheme,
          currentTheme: state.theme,
          theme: fetchTheme(state.theme)
        }}
      >
        {children}
      </Context.Provider>
    )
}

export { SettingsProvider }
