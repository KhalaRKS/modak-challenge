import { ArtworkLocalRepository } from './../../../data/repositories/artwork_local_repository';
import { ArtworkRemoteDataSource } from '../../../data/datasources/remote/artwork_datasource';
import { ArtworkRepository } from '../../../data/repositories/artwork_repository';
import {Artwork} from '../../entities/artwork';
import {IArtworkRepository} from '../../repositories/artwork_repository';
import { ArtworkLocalDataSource } from '../../../data/datasources/local/artwork_local_datasource';
import { IArtworkLocalRepository } from '../../repositories/artwork_local_repository';

export class GetArtworksUseCase {
  private readonly _artworkRemoteRepository: IArtworkRepository;

  constructor() {
    const artworkRemoteRepository = new ArtworkRepository(new ArtworkRemoteDataSource())
    this._artworkRemoteRepository = artworkRemoteRepository;
  }

  async execute(page: number): Promise<Artwork[]> {
    return await this._artworkRemoteRepository.getArtworks(page);
  }
}
