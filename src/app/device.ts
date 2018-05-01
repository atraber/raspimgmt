import { Stream } from './stream';

export class Device {
  id: number;
  name: string;
  mac: string;
  last_seen: number;
  streams: Stream[];

  constructor () {
    this.name = "";
    this.mac = "";
    this.last_seen = 0;
    this.streams = [];
  }
}
