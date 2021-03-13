import React from 'react'
import { Footer as NBFooter, FooterTab, Button, Text } from 'native-base';
import { Translations } from '../../models/translations'
import { Link } from 'react-router-native';

const Footer: ({ history, translations }: {
  history: any
  translations: Translations
}) => JSX.Element = ({ history, translations }) => (
  <NBFooter>
    <FooterTab>
      <Button onPress={() => history.goBack()} active={history.location.pathname !== '/settings'}>
        <Text>{translations.news}</Text>
      </Button>
      <Button onPress={() => history.push('/settings')} active={history.location.pathname === '/settings'}>
        <Text>{translations.settings}</Text>
      </Button>
    </FooterTab>
  </NBFooter>
)

export default Footer
