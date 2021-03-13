import React from 'react'
import { render } from 'react-native-testing-library'
import { Typography } from '../'
import Header from './Header'

describe('(Header) is rendering', () => {
  it('should render header', () => {
    const { getByType } = render(
      <Header title={'Test Title'} history={{ location: { pathname: '/' }}} />
    )
    const text = getByType(Typography)
    expect(text.props.children).toEqual('Test Title')
  })

  it('should render back button', () => {
    const { getAllByType } = render(
      <Header title={'Test Title'} history={{ location: { pathname: '/test' }}} />
    )
    const text = getAllByType(Typography)
    expect(text[0].props.children).toEqual('<')
    expect(text[1].props.children).toEqual('Test Title')
  })
})
