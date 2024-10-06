import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];

  constructor() { }

  ngOnInit() {
    // TODO: Fetch notifications
    this.notifications = [
      { id: 1, message: 'New comment on your debate', time: '2 hours ago' },
      { id: 2, message: 'Your clip is trending!', time: '1 day ago' },
    ];
  }
}