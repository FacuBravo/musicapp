import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SongComponent } from './song/song.component';
import { SongContainerComponent } from './song-container/song-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LikesComponent } from './likes/likes.component';
import { LikeBtnComponent } from './like-btn/like-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SongComponent,
    SongContainerComponent,
    NavbarComponent,
    LikesComponent,
    LikeBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
