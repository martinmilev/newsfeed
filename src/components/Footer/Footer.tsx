import React from 'react'
import { Footer as NBFooter, FooterTab, Button, Text } from 'native-base';
import { Translations } from '../../models/translations'

const Footer: ({ path, translations }: {
  path: string
  translations: Translations
}) => JSX.Element = ({ path, translations }) => (
  <NBFooter>
    <FooterTab>
      <Button active={path !== '/settings'}>
        <Text>{translations.news}</Text>
      </Button>
      <Button active={path === '/settings'}>
        <Text>{translations.settings}</Text>
      </Button>
    </FooterTab>
  </NBFooter>
)

export default Footer
