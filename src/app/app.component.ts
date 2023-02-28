import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'github-users';
  usersList: any = [];
  constructor(private user: AppService) {}

  ngOnInit() {
    this.user.getData().subscribe((data: any) => {
      this.usersList = [...data];
      console.log('log: userList', this.usersList);
    });
  }
}
