import {Artwork} from '../entities/artwork';

export abstract class IArtworkRepository {
  abstract getArtworks(page: number): Promise<Artwork[]>;
  abstract getArtworkById(artwork_id: number): Promise<Artwork>;
}
