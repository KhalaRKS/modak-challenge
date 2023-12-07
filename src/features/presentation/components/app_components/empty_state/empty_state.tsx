import {StackActions, useNavigation} from '@react-navigation/native';
import {Button, Icon, IconElement, Text} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {styles} from './empty_state_style';

export const EmptyState = ({
  icon,
  title,
  subtitle,
  buttonText,
  danger
}: {
  icon: string;
  title: string;
  subtitle: string,
  buttonText: string;
  danger?: boolean;
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerEmptyState}>
      <Icon name={icon} fill={danger ? '#FF3D71': "#FFAA00"} style={styles.icon} />
      <View>
        <Text style={styles.emptyStateText}>{title}</Text>
        <Text style={styles.emptyStateText}>
          {subtitle}
        </Text>
      </View>
    {buttonText &&  <Button onPress={() => navigation.dispatch(StackActions.push('home'))}>
        {buttonText}
      </Button>}
    </View>
  );
};
