import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lineitem',
  templateUrl: './lineitem.component.html',
  styleUrls: ['./lineitem.component.scss']
})
export class LineitemComponent {
  @Input() item;
  @Output() key = new EventEmitter();

  removeItem(key) {
    this.key.emit(key);
  }
}
