import React, { Component } from 'react'
import { TouchableOpacity, BackHandler, Text } from 'react-native'
export default class BackButton extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
  }

  handleBackPress = () => {
    this.goBack()
    return true
  }

  goBack() {
    const { history } = this.props
    if (history.location.pathname !== '/') {
      history.goBack()
      return true
    }
    BackHandler.exitApp()
    return false
  }

  render() {
    return (
      <TouchableOpacity
        style={{ width: 40 }}
        onPress={this.handleBackPress}
        testID='button'
      >
        <Text style={{ fontSize: 40, color: '#FFFFFF' }}>{'<'}</Text>
      </TouchableOpacity>
    )
  }
}
