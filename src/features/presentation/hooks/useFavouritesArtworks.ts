import React, {useState} from 'react';
import {Artwork} from '../../domain/entities/artwork';
import {DeleteFavouritesArtworksUseCase} from '../../domain/usecases/artwork/delete_favourites_artworks_use_case';
import {GetFavouriteArtworksUseCase} from '../../domain/usecases/artwork/get_favourite_artworks_use_case';
import {useRouter} from './useRouter';
import {ROUTES} from '../router/routes';

export const useFavouritesArtworks = () => {
  const [favouritesArtworks, setFavouritesArtworks] = useState<Artwork[]>([]);
  const DeleteFavouritesArtworks = new DeleteFavouritesArtworksUseCase();
  const GetFavouriteArtworks = new GetFavouriteArtworksUseCase();
  const {handleReplace} = useRouter();

  const getFavouritesArtworks = async () => {
    const data = await GetFavouriteArtworks.execute();
    setFavouritesArtworks(data);
  };
  const cleanAllFavouritesArtworks = async () => {
    DeleteFavouritesArtworks.execute();
    setFavouritesArtworks([]);
    handleReplace(ROUTES.HOME, {});
  };
  return {
    cleanAllFavouritesArtworks,
    getFavouritesArtworks,
    favouritesArtworks,
    setFavouritesArtworks,
  };
};
