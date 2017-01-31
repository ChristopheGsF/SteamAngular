export class Game{
name;
summary;
genres;
screenshots;
cover;
videos;

  constructor(name, summary, genres, screenshots, cover, videos) {
    this.name = name;
    this.summary = summary;
    this.genres = genres;
    this.screenshots = screenshots;
    this.cover = cover;
    this.videos = videos;
  }
}
