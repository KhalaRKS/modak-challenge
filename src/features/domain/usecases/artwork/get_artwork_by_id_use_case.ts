import { ArtworkRemoteDataSource } from '../../../data/datasources/remote/artwork_datasource';
import { ArtworkRepository } from '../../../data/repositories/artwork_repository';
import {Artwork} from '../../entities/artwork';
import {IArtworkRepository} from '../../repositories/artwork_repository';

export class GetArtworkByIdUseCase {
  private readonly _artworkRepository: IArtworkRepository;

  constructor() {
    const artworkRepository = new ArtworkRepository(new ArtworkRemoteDataSource())
    this._artworkRepository = artworkRepository;
  }

  async execute(id: number): Promise<Artwork> {
    return await this._artworkRepository.getArtworkById(id);
  }
}
