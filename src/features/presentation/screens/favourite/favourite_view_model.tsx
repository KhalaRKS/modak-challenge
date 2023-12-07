import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useFavouritesArtworks} from '../../hooks/useFavouritesArtworks';
export const favouriteViewModel = () => {
  const {
    cleanAllFavouritesArtworks,
    favouritesArtworks,
    getFavouritesArtworks,
  } = useFavouritesArtworks();
  const navigation = useNavigation();

  useEffect(() => {
    getFavouritesArtworks();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getFavouritesArtworks();
    });

    return unsubscribe;
  }, [navigation]);

  return {
    favouritesArtworks,
    getFavouritesArtworks,
    cleanAllFavouritesArtworks,
  };
};
