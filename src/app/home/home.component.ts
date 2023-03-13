import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usersList: any = [];
  constructor(private user: AppService) {}

  ngOnInit() {
    AOS.init();
    AOS.refresh();

    this.user.getData().subscribe((data: any) => {
      this.usersList = [...data];
      console.log('log: userList', this.usersList);
    });
  }
}
