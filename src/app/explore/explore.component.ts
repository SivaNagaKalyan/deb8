import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  trendingHashtags: string[] = [];

  constructor() { }

  ngOnInit() {
    // TODO: Fetch trending hashtags
    this.trendingHashtags = ['#ClimateAction', '#TechInnovation', '#GlobalHealth', '#Education'];
  }

  raiseHashtag(hashtag: string) {
    // TODO: Implement hashtag raising logic
    console.log(`Raising hashtag: ${hashtag}`);
  }
}