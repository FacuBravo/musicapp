import { Component } from '@angular/core';
import { Song } from '../song-container/Song';
import { LikesService } from '../likes.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.scss'
})
export class LikesComponent {
  songs: Song[] = []

  constructor(
    private likeService: LikesService
  ) { }

  ngOnInit(): void {
    this.likeService.likesList.subscribe(data => this.songs = data)
  }
}