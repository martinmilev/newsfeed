import React from 'react'
import { Container, Content, CardItem, Body, H2 } from 'native-base'
import DropDownPicker from 'react-native-dropdown-picker'
import { Translations } from '../../models/translations'
import { SettingsConsumer } from '../../context/SettingsContext'

const Settings: ({ translations }: {
  translations: Translations
}) => JSX.Element = ({ translations }) => (
  <SettingsConsumer>
    {({ language, updateLanguage}) => (
      <Container>
        <Content padder>
          <CardItem style={{ height: 200 }}>
            <Body>
              <H2>{translations.language}</H2>
              <DropDownPicker
                items={[
                  { label: translations.english, value: 'en' },
                  { label: translations.bulgarian, value: 'bg' },
                ]}
                defaultValue={language}
                containerStyle={{ height: 40, width: '100%' }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{ justifyContent: 'flex-start' }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={({ value }: { value: string }) => updateLanguage(value)}
              />
            </Body>
          </CardItem>
        </Content>
      </Container>
    )}
  </SettingsConsumer>
)

export default Settings
