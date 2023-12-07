import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { ROUTES } from '../../router/routes';
export const loadingViewModel = () => {
    const navigation = useNavigation();

    useEffect(() => {
      const skipLoading = async () => {
        setTimeout(async () => {
            navigation.dispatch(StackActions.replace(ROUTES.HOME));
          
        }, 1000);
      };
  
      skipLoading();
    }, [navigation]);
  return {

  }
}
