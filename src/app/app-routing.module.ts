import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongContainerComponent } from './song-container/song-container.component';
import { AboutComponent } from './about/about.component';
import { LikesComponent } from './likes/likes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SongContainerComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }