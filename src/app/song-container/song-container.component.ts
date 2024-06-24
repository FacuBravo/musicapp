import { Component } from '@angular/core';
import { Song } from './Song';
import { SongDataService } from '../song-data.service';
import { LikesService } from '../likes.service';

@Component({
  selector: 'app-song-container',
  templateUrl: './song-container.component.html',
  styleUrl: './song-container.component.scss'
})
export class SongContainerComponent {
  songs: Song[] = []

  likedSongs: Song[] = []

  constructor(
    private songService: SongDataService,
    private likeService: LikesService
  ) { }

  ngOnInit(): void {
    this.songService.getAll().subscribe(data => this.songs = data)
    this.likeService.likesList.subscribe(data => this.likedSongs = data)
  }
}