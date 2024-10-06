import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  lives: any[] = []; // This will store the live debates

  constructor() { }

  ngOnInit() {
    // TODO: Fetch live debates based on user's interests
    this.lives = [
      { id: 1, topic: 'Climate Change', participants: ['User1', 'User2'] },
      { id: 2, topic: 'Artificial Intelligence', participants: ['User3', 'User4'] },
    ];
  }
}