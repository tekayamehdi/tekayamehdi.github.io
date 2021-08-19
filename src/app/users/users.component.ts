import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();

  }

  getUsers(): void {
    this.userService.getUseres()
      .subscribe(users => this.users = users);

  }

  add(nom: string, prenom: string, typeadresse: string, datenaissance: any): void {
    nom = nom.trim();
    prenom.trim();
    if (!nom) { return; }
    this.userService.addUser({ nom, prenom, datenaissance } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

}
