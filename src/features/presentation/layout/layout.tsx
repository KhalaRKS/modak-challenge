import {StackActions, useNavigation, useNavigationState} from '@react-navigation/native';
import {
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
  Layout as KittenLayout
} from '@ui-kitten/components';
import React from 'react';
import {Text} from '@ui-kitten/components';

import {View} from 'react-native';
import {styles} from './layout_styles';
import { getIconFromRoute } from '../../core/utils/getIconFromRoute';
import { ROUTES } from '../router/routes';

export const Layout = ({children, navigateText,route}: {children: JSX.Element | JSX.Element[], navigateText: string,route?: string}) => {
  const navigation = useNavigation();

  
  const accesory = () => (
    <TopNavigationAction
      icon={<Icon name={getIconFromRoute(route)} fill="#3366FF" />}
      onPress={() => navigation.dispatch( route ? StackActions.push(route) : StackActions.pop())}
    />
  );
  return (
    <KittenLayout level='1' style={!route  ? {backgroundColor: '#A6C1FF'}: {}}>

      <TopNavigation
        style={styles.topNav}
        accessoryLeft={accesory}
        title={<Text style={styles.topNavText} onPress={() =>  navigation.dispatch( route ? StackActions.push(route) : StackActions.pop())}>{navigateText}</Text>}
      />
      <Divider style={{backgroundColor: '#8F9BB3'}} />
      {children}
    </KittenLayout>
  );
};
