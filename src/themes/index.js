import getTheme from './components'
import day from './variables/day'
import night from './variables/night'
import material from './variables/material'

const fetchTheme = (theme) => {
  switch (theme) {
    case 'day':
      return getTheme(day)
    case 'night':
      return getTheme(night)
    default:
      return getTheme(material)
  }
}

export { fetchTheme }
