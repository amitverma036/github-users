import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  usersList: any = [];
  constructor(private user: AppService) {}

  ngOnInit() {
    this.user.getData().subscribe((data: any) => {
      this.usersList = [...data];
      console.log('log: userList', this.usersList);
    });
  }
}
