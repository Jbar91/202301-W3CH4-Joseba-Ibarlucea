/* eslint-disable no-unused-vars */
export type SerieStructure = {
  id: string;
  title: string;
  info: string;
  score: number;
  poster: string;
  posterAlt: string;
  isWatched: boolean;
};

export class Serie implements SerieStructure {
  public id: string;
  public isWatched: boolean;
  public score: number;
  public posterAlt: string;
  static generateId() {
    const aNumbers = new Uint32Array(1);
    crypto.getRandomValues(aNumbers);
    return ('000000' + aNumbers[0]).slice(-6);
  }

  constructor(
    public title: string,
    public info: string,
    public poster: string
  ) {
    this.id = Serie.generateId();
    this.isWatched = false;
    this.score = 0;
    this.posterAlt = `${this.title} poster`;
  }
}
