import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  public feedTitle = this.route.snapshot.queryParamMap.get('feedTitle');
  public feedBody = this.route.snapshot.queryParamMap.get('feedBody');
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }
}
