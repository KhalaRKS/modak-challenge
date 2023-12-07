export abstract class Artwork {
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
    this.image_id = image_id;
    this.origin = origin;
    this.favourite = favourite
  }
}
