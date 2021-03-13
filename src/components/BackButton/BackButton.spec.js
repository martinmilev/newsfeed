import React from 'react'
import BackButton from './BackButton'
import { render, fireEvent } from 'react-native-testing-library'
import { Typography } from '../'

describe('(BackButton) is rendering', () => {
  it('should render BackButton', () => {
    const { getAllByType } = render(
      <BackButton history={{ location: { path: '/any' } }} />
    )
    const button = getAllByType(Typography)
    expect(button.length).toBe(1)
  })

  it('should go back on press BackButton', () => {
    const execute = jest.fn();
    const { getByTestId } = render(
      <BackButton history={{ location: { path: '/test' }, goBack: execute }} />
    )
    fireEvent(getByTestId('button'), 'onPress')
    expect(execute).toHaveBeenCalled()
  })

  it('should go back when hardware button is pressed', () => {
    //ToDo
  })

  it('should not go back after component is unmounted', () => {
    //ToDo
  })
})