import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  currentUser?: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getUserbyId(this.route.snapshot.params["id"]);
  }

  getUserbyId(id: number) {
    this.userService.getById(id).subscribe({
      next: (response: User) => {
        this.currentUser = response;
        console.log(this.currentUser);
      },
      error: (e) => console.error(e),
    });
  }
}
