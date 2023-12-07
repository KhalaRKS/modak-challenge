import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {GetLocalArtworksUseCase} from '../../../domain/usecases/artwork/get_local_artworks_use_case';
import {useGetArtworks} from '../../hooks/useGetArtworks';
export const homeViewModel = () => {
  const getLocalArtworksUseCase = new GetLocalArtworksUseCase();
  const {artworks, getArtworks, isLoading, setArtworks, page} =
    useGetArtworks();

  useEffect(() => {
    const getFromLocal = async () => {
      try {
        const data = await getLocalArtworksUseCase.execute(page);
        console.log('data');
        console.log(data);

        if (!data.length) {
          return getArtworks();
        }
        setArtworks(data);
      } catch (error) {
        AsyncStorage.setItem('favourites_artworks', JSON.stringify([]));
        getArtworks();
      }
    };
    getFromLocal();
  }, []);

  return {
    artworks,
    isLoading,
    getArtworks,
  };
};
