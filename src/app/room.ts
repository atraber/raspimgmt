import { Score } from './score';

export class Room {
  id: number;
  name: string;
  scores: Score[];

  constructor () {
    this.name = "";
    this.scores = [];
  }
}
