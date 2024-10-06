import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css']
})
export class ClipsComponent implements OnInit {
  clips: any[] = []; // This will store the 30-second clips

  constructor() { }

  ngOnInit() {
    // TODO: Fetch clips
    this.clips = [
      { id: 1, title: 'Highlight from Climate Debate', author: 'User1' },
      { id: 2, title: 'AI Ethics Discussion', author: 'User3' },
    ];
  }

  recordClip() {
    // TODO: Implement clip recording logic
    console.log('Recording new clip');
  }
}