import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveComponent } from './live/live.component';
import { ExploreComponent } from './explore/explore.component';
import { ClipsComponent } from './clips/clips.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    LiveComponent,
    ExploreComponent,
    ClipsComponent,
    NotificationsComponent,
    ProfileComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}