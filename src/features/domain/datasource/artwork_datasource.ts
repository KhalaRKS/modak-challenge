import {Artwork} from '../entities/artwork';

export abstract class IArtworkRemoteDataSource {
  abstract getArtworks(page: number): Promise<Artwork[]>;
  abstract getArtworkById(artwork_id: number): Promise<Artwork>;
}
