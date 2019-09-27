import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
  @Input() item;
  @Output() key = new EventEmitter();

  addItem(key) {
    this.key.emit(key);
  }
}
