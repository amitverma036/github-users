import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnChanges {
  @Input() title = '';
  @Input() login = '';
  @Input() html_url = '';
  @Input() avatar_url = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('login')) {
    }
  }
}
