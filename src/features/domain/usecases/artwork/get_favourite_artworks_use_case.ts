
import { ArtworkLocalDataSource } from '../../../data/datasources/local/artwork_local_datasource';
import { ArtworkLocalRepository } from '../../../data/repositories/artwork_local_repository';
import {Artwork} from '../../entities/artwork';
import { IArtworkLocalRepository } from '../../repositories/artwork_local_repository';
import {IArtworkRepository} from '../../repositories/artwork_repository';

export class GetFavouriteArtworksUseCase {
  private readonly _localArtworkRepository: IArtworkLocalRepository;

  constructor() {
    const artworkRepository = new ArtworkLocalRepository(new ArtworkLocalDataSource())
    this._localArtworkRepository = artworkRepository;
  }

  async execute(): Promise<Artwork[]> {
    return await this._localArtworkRepository.getFavouritesArtworks();
  }
}
