import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor() { }

  ngOnInit() {
    // TODO: Fetch user data
    this.user = {
      name: 'John Doe',
      username: '@johndoe',
      debates: 15,
      followers: 1000,
      following: 500
    };
  }
}