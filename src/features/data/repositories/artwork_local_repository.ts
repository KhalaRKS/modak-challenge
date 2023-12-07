import {ArtworkRemoteDataSource} from './../datasources/remote/artwork_datasource';

import {IArtworkRepository} from '../../domain/repositories/artwork_repository';
import { Artwork } from '../../domain/entities/artwork';
import { IArtworkLocalRepository } from '../../domain/repositories/artwork_local_repository';
import { ArtworkLocalDataSource } from '../datasources/local/artwork_local_datasource';

export class ArtworkLocalRepository implements IArtworkLocalRepository {
  _artworkLocalDataSource: ArtworkLocalDataSource;
  constructor(artworkRemoteDataSource: ArtworkLocalDataSource) {
    this._artworkLocalDataSource = artworkRemoteDataSource;
  }
  getLocalArtworks(page: number): Promise<Artwork[]> {
    return this._artworkLocalDataSource.getLocalArtworks(page);
  }
  getFavouritesArtworks(): Promise<Artwork[]> {
    return this._artworkLocalDataSource.getFavouritesArtworks();
  }
  deleteFavouritesArtworks(): Promise<void> {
      return this._artworkLocalDataSource.deleteFavouritesArtworks()
  }
}
