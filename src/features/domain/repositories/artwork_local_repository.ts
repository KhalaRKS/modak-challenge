import {Artwork} from '../entities/artwork';

export abstract class IArtworkLocalRepository {
  abstract getLocalArtworks(page: number): Promise<Artwork[]>;
  abstract getFavouritesArtworks(): Promise<Artwork[]>;
  abstract deleteFavouritesArtworks(): Promise<void>;
}
