import {Artwork} from '../../domain/entities/artwork';
import {ArtworkAdapter} from '../adapters/artwork_adapter';

export class ArtworkModel implements Artwork {
  id: number;
  artist: string;
  title: string;
  min_description: string;
  image_id: string;
  origin: string;
  favourite: boolean;

  constructor(
    id: number,
    artist: string,
    title: string,
    min_description: string,
    image_id: string,
    origin: string,
    favourite: boolean,
  ) {
    this.id = id;
    this.artist = artist;
    this.title = title;
    this.min_description = min_description;
    this.image_id = image_id,
    this.origin = origin;
    this.favourite= favourite;
  } 
  static fromJson(json: any): ArtworkModel {
    return new ArtworkModel(
      json[ArtworkAdapter.id] ?? -1,
      json[ArtworkAdapter.artist] ?? 'Unknown',
      json[ArtworkAdapter.title] ?? 'Unknown',
      json[ArtworkAdapter.min_description] ?? 'N/A',
      json[ArtworkAdapter.image_id] ?? 'N/A',
      json[ArtworkAdapter.origin] ?? 'Unknown',
      false
    );
  }

  static set favourite(value: boolean){
     this.favourite = value
  } 

  toJson(): any {
    return {
      id: this.id,
      artist: this.artist,
      title: this.title,
      min_description: this.min_description,
      origin: this.origin,
      favourite: this.favourite
    };
  }
}
