import {ArtworkRemoteDataSource} from './../datasources/remote/artwork_datasource';

import {IArtworkRepository} from '../../domain/repositories/artwork_repository';
import { Artwork } from '../../domain/entities/artwork';

export class ArtworkRepository implements IArtworkRepository {
  _artworkRemoteDataSource: ArtworkRemoteDataSource;
  constructor(artworkRemoteDataSource: ArtworkRemoteDataSource) {
    this._artworkRemoteDataSource = artworkRemoteDataSource;
  }
  getArtworks(page: number): Promise<Artwork[]> {
    return this._artworkRemoteDataSource.getArtworks(page);
  }
  getArtworkById(artwork_id: number): Promise<Artwork> {
    return this._artworkRemoteDataSource.getArtworkById(artwork_id);
  }
}
