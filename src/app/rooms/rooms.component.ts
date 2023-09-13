import { Component } from '@angular/core';

@Component({
  selector: 'hotel-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  noOfRooms = 10;
  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
