import { Component, Input } from '@angular/core';
import { Song } from '../song-container/Song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent {
  @Input()
  song: Song

  @Input()
  likedSongs: Song[]

  ngOnInit(): void {
    let songLiked = this.likedSongs.find(e => e.id == this.song.id)

    if (songLiked) {
      this.song.liked = true
    }
  }
}