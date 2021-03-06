import { Component } from '@angular/core';
import { ScoresService } from './scores.service';
import { Room } from './room';
import { Score } from './score';
import * as moment from 'moment';

@Component({
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent {
  rooms: Room[];
  room_selected: Room;

  constructor(private scoresService: ScoresService) {
    this.rooms = this.scoresService.rooms;

    this.room_selected = this.roomSelect();
    this.scoresService.roomsUpdated.subscribe(
      (rooms) => this.rooms = rooms
    );
  }

  roomSelect() {
    if (this.rooms.length > 0)
      return this.rooms[0];
    else
      return null;
  };

  addScoreToRoom(room, name, time) {
    var score = new Score();
    score.name = name;
    score.time = parseInt(moment.utc(time, "HH:mm").format("X"));
    this.scoresService.addScoreToRoom(room, score).subscribe(score => room.scores.push(score));
  };

  deleteScoreFromRoom(room, score) {
    this.scoresService.deleteScoreFromRoom(room, score).subscribe();

    return false;
  }
}
