import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Artwork } from '../../domain/entities/artwork'
import { GetArtworksUseCase } from '../../domain/usecases/artwork/get_artworks_use_case'
import { GetLocalArtworksUseCase } from '../../domain/usecases/artwork/get_local_artworks_use_case'

export const useGetArtworks = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const getArtworksUseCase = new GetArtworksUseCase();
    const getLocalArtworksUseCase = new GetLocalArtworksUseCase();
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [page, setPage] = useState(1);

    const getArtworks = async () => {
        setIsLoading(true);
        if (isFetching) return;
        setIsFetching(true);
        const artworksData = await getArtworksUseCase.execute(page);
        if (artworksData) {
          const filterUnvaliableImage = [...artworks, ...artworksData].filter(
            art => art.image_id !== 'N/A',
          );
    
          setPage(prev => prev + 1);
          setArtworks(filterUnvaliableImage);
          saveArtworksOnStorage(filterUnvaliableImage);
        }
        setIsFetching(false);
        setIsLoading(false);
      };
      const saveArtworksOnStorage = async (artworkList: Artwork[]) => {
        await AsyncStorage.setItem('loaded_artworks', JSON.stringify(artworkList));
      };
  return {
    getArtworks,
    artworks,
    setArtworks,
    isLoading,
    page
  }
}
