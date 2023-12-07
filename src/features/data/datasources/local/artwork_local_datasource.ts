import AsyncStorage from '@react-native-async-storage/async-storage';
import {IArtworkRemoteDataSource} from '../../../domain/datasource/artwork_datasource';
import {Artwork} from '../../../domain/entities/artwork';
import { IArtworkLocalRepository } from '../../../domain/repositories/artwork_local_repository';
import {ArtworkModel} from '../../models/artwork_model';

export class ArtworkLocalDataSource implements IArtworkLocalRepository {
  async getLocalArtworks(page: number): Promise<Artwork[]> {
    const loaded_json = await AsyncStorage.getItem('loaded_artworks');
    if(loaded_json == null) {
        AsyncStorage.setItem('loaded_artworks', JSON.stringify([]))
        return Promise.reject('Cant get local artworks')};


    const data = JSON.parse(loaded_json);

    return data;
    
    
  }
  async getFavouritesArtworks(): Promise<Artwork[]> {
    const response = await AsyncStorage.getItem('favourites_artworks');

    if (response == null){
        AsyncStorage.setItem('favourites_artworks', JSON.stringify([]))
        return Promise.reject('Cant get local artworks')}
    const favourites = await JSON.parse(response);

    return favourites;
  
}
async deleteFavouritesArtworks(): Promise<void> {
    try {
        await AsyncStorage.setItem('favourites_artworks', JSON.stringify([]))
        
    } catch (error) {
    }
    
}
}
