import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FeedsService } from 'src/app/services/feeds.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit, OnDestroy {
  public postedFeed: object;
  private sub: Subscription;
  private id = 4;
  public feedsForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    text: ['', Validators.required]
  });

  constructor(public feedsService: FeedsService,
              public loginService: LoginService,
              private fb: FormBuilder) { }

  public ngOnInit(): void {
    if (!this.feedsService.feeds.length) {
      this.sub = this.feedsService.getFeeds().subscribe(feeds => this.feedsService.feeds = [...feeds]);
    }
  }

  public onSubmit(): void {
    this.sub = this.feedsService.putFeed(this.feedsForm.value.title, this.feedsForm.value.text, this.id)
      .subscribe(feed => this.feedsService.feeds.push(feed));
    this.id++;
  }

  public deleteFeed(id: number, index: number): void {
    this.feedsService.deleteFeed(id);
    this.feedsService.feeds.splice(index, 1);
  }

  public logOut(): void {
    this.feedsService.feeds = [];
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
