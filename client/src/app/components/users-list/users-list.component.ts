import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  title = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response.users;
        console.log(response);
      },
      error: (e) => console.error(e),
    });
  }
}
