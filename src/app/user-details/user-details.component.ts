import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../home/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  userName: string = '';
  userDetails: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails(): void {
    const userName = this.route.snapshot.paramMap.get('username');
    this.userName = userName || '';
    if (userName) {
      this.userService.getUserProfile(userName).subscribe((user) => {
        this.userDetails = user;
      });
    }
  }
}
