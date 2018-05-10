import { Component } from '@angular/core';
import { DevicesService } from './devices.service';
import { Device } from './device';
import { Stream } from './stream';

@Component({
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {
  devices: Device[];
  streams: Stream[];
  dev_selected: Device;

  constructor(private devicesService: DevicesService) {
    this.devices = this.devicesService.devices;
    this.streams = this.devicesService.streams;

    this.dev_selected = this.deviceSelect();
    this.devicesService.devicesUpdated.subscribe(
      (devices) => this.devices = devices
    );

    this.devicesService.streamsUpdated.subscribe(
      (streams) => this.streams = streams
    );
  }

  deviceSelect() {
    if (this.devices.length > 0)
      return this.devices[0];
    else
      return null;
  };

  dev_remove_stream = function (dev, stream) {
    var index = dev.streams.indexOf(stream);
    dev.streams.splice(index, 1);

    return false;
  };

  deleteDevice(dev) {
    this.devicesService.deleteDevice(dev).subscribe();
    this.dev_selected = this.deviceSelect();
  };

  device_add = function (name) {
    var dev = new Device();
    dev.name = name;
    this.devicesService.addDevice(dev).subscribe(device => this.devices.push(dev));
  };

  updateDevice(dev) {
    this.devicesService.updateDevice(dev).subscribe();
  }
}
