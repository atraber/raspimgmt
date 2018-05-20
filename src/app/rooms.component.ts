import { Component } from '@angular/core';
import { ScoresService } from './scores.service';
import { Room } from './room';
import * as moment from 'moment';

@Component({
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
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

  addRoom(name) {
    var room = new Room();
    room.name = name;
    this.scoresService.addRoom(room).subscribe(room => this.rooms.push(room));
  };

  updateRoom(room) {
    this.scoresService.updateRoom(room).subscribe();
  }

  deleteRoom(room) {
    this.scoresService.deleteRoom(room).subscribe();
    if (this.room_selected == room)
      this.room_selected = null;
  }
}
