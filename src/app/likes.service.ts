import { Injectable } from '@angular/core';
import { Song } from './song-container/Song';
import { BehaviorSubject } from 'rxjs';
import { SongDataService } from './song-data.service';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private _likesList: Song[] = []

  likesList: BehaviorSubject<Song[]> = new BehaviorSubject(this._likesList)

  addToLiked(song: Song) {
    this._likesList.push({ ...song })
    this.likesList.next(this._likesList)
  }

  removeFromLiked(song: Song) {
    for (let i = 0; i < this._likesList.length; i++) {
      if (this._likesList[i].id == song.id) {
        this._likesList.splice(i, 1)
      }
    }
    
    this.likesList.next(this._likesList)
  }
}