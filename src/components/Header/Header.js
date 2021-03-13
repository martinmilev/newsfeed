import React from 'react'
import { Header as NBHeader, Item, Input, Left, Body, Right } from 'native-base'
import { BackButton } from '../BackButton'
import { useHistory } from 'react-router-dom';

const Header = ({ fetchArticles }) =>
  useHistory().location.pathname == '/' ? (
    <NBHeader searchBar rounded>
      <Item>
        <Input
          placeholder='Search'
          onChangeText={(text) => fetchArticles(text)}
        />
      </Item>
    </NBHeader>
  ) : (
    <NBHeader>
      <Left>
        <BackButton history={useHistory()} />
      </Left>
      <Body />
      <Right />
    </NBHeader>
  )

export default Header
