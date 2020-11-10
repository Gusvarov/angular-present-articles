import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/feeds/feed/feed.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'feeds', component: FeedsComponent, },
  { path: 'feeds/:id', component: FeedComponent },
  { path: '**',  redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
