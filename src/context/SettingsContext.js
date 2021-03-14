import React, { createContext, useState } from 'react'
import { fetchTranslations } from '../translations'

export const Context = createContext()
export const SettingsConsumer = Context.Consumer

const SettingsProvider = ({ children }) => {
  const [state, setState] = useState({ language: 'en' })
  const updateLanguage = language => setState({ ...state, language })
    return (
      <Context.Provider
        value={{
          language: state.language,
          updateLanguage: updateLanguage,
          translations: fetchTranslations(state.language)
        }}
      >
        {children}
      </Context.Provider>
    )
}

export { SettingsProvider }
