import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnChanges, OnInit {
  @Input() title = '';
  @Input() login = '';
  @Input() html_url = '';
  @Input() avatar_url = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('login')) {
    }
  }
  ngOnInit() {
    AOS.init();
    AOS.refresh();
  }
}
