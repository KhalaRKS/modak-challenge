import { ArtworkLocalDataSource } from '../../../data/datasources/local/artwork_local_datasource';
import { ArtworkRemoteDataSource } from '../../../data/datasources/remote/artwork_datasource';
import { ArtworkLocalRepository } from '../../../data/repositories/artwork_local_repository';
import { ArtworkRepository } from '../../../data/repositories/artwork_repository';
import {Artwork} from '../../entities/artwork';
import { IArtworkLocalRepository } from '../../repositories/artwork_local_repository';
import {IArtworkRepository} from '../../repositories/artwork_repository';

export class DeleteFavouritesArtworksUseCase {
  private readonly _localArtworkRepository: IArtworkLocalRepository;

  constructor() {
    const artworkRepository = new ArtworkLocalRepository(new ArtworkLocalDataSource())
    this._localArtworkRepository = artworkRepository;
  }

  async execute(): Promise<void> {
    return this._localArtworkRepository.deleteFavouritesArtworks();
  }
}
