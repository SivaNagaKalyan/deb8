import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { LiveComponent } from './live/live.component';
import { ExploreComponent } from './explore/explore.component';
import { ClipsComponent } from './clips/clips.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/live', pathMatch: 'full' },
  { path: 'live', component: LiveComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'clips', component: ClipsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}