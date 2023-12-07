import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Artwork} from '../../../domain/entities/artwork';
import notifee from '@notifee/react-native';
import {useFavouritesArtworks} from '../../hooks/useFavouritesArtworks';
export const detailsViewModel = ({id}: {id: number}) => {
  // const [favouritesArtworks, setFavouritesArtworks] = useState<Artwork[]>([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const {favouritesArtworks, getFavouritesArtworks, setFavouritesArtworks} =
    useFavouritesArtworks();
  useEffect(() => {
    getFavouritesArtworks();
  }, []);

  useEffect(() => {
    const existOnFavourite = favouritesArtworks.find(
      favArtwork => favArtwork.id === id,
    );
    if (existOnFavourite) {
      setIsFavourite(true);
    }
  }, [favouritesArtworks]);

  const addArtworkToFavourites = (newFavouriteArtwork: Artwork) => {
    const isAlredyMarked = favouritesArtworks.find(
      item => item.id === newFavouriteArtwork.id,
    );

    if (isAlredyMarked) return removeArtworkFromFavourites(isAlredyMarked);
    let newFavouritesArtworks = [...favouritesArtworks, newFavouriteArtwork];

    setFavouritesArtworks(newFavouritesArtworks);
    onDisplayNotification(newFavouriteArtwork);
    AsyncStorage.setItem(
      'favourites_artworks',
      JSON.stringify(newFavouritesArtworks),
    );
  };

  const removeArtworkFromFavourites = (isAlredyMarked: Artwork) => {
    const filteredArtworks = favouritesArtworks.filter(
      item => item.id !== isAlredyMarked.id,
    );
    AsyncStorage.setItem(
      'favourites_artworks',
      JSON.stringify(filteredArtworks),
    );
    setFavouritesArtworks(filteredArtworks);
    setIsFavourite(false);
  };

  async function onDisplayNotification(artwork: Artwork) {

    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: `Artwork ${artwork.id}`,
      body: 'You add a new artwork to your favourite collection!',
      data: {artwork},
      android: {
        channelId,
        smallIcon: 'ic_launcher', 
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  return {
    isFavourite,
    addArtworkToFavourites,
  };
};
