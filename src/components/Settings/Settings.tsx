import React from 'react'
import { Container, Content, CardItem, Body, H2 } from 'native-base';
import { Translations } from '../../models/translations'
import DropDownPicker from 'react-native-dropdown-picker';

const Settings: ({ translations }: {
  translations: Translations
}) => JSX.Element = ({ translations }) => {
  console.log('translations', translations)
  return (
    <Container>
      <Content padder>
          <CardItem style={{ height: 400 }}>
            <Body>
              <H2>{translations.language}</H2>
              <DropDownPicker
                items={[
                  { label: translations.english, value: 'en' },
                  { label: translations.bulgarian, value: 'bg' },
                ]}
                defaultValue={'en'}
                containerStyle={{ height: 40, width: '100%' }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => console.log('ln', item)}
              />
            </Body>
          </CardItem>
      </Content>
    </Container>
  )
}

export default Settings
