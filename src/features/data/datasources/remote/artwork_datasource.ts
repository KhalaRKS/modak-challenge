import {IArtworkRemoteDataSource} from '../../../domain/datasource/artwork_datasource';
import {Artwork} from '../../../domain/entities/artwork';
import {ArtworkModel} from '../../models/artwork_model';

export class ArtworkRemoteDataSource implements IArtworkRemoteDataSource {
  async getArtworks(page: number): Promise<Artwork[]> {
      
      const query = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=5`);
  
      const response = await query.json()
      
      if (await response.data) {
        return response.data.map((artwork: any) =>
          ArtworkModel.fromJson(artwork),
        );
      }
    
      return Promise.reject('Cant get artworks');
    
  }
  async getArtworkById(artwork_id: number): Promise<Artwork> {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/${artwork_id}`,
      );
  
      if (response.data) {
        return ArtworkModel.fromJson(response.data);
      }
      return Promise.reject('Not data founded');
    } catch (error) {
      
      return Promise.reject('Not arwork by id founded');
    }
  }
}
