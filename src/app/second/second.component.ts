import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Input() country? : Country;
  @Output() hideDetailsEvent = new EventEmitter<string>();

  sendHideDetailsEvent(){
    this.hideDetailsEvent.emit("Hide Details Card!")
  }
}
