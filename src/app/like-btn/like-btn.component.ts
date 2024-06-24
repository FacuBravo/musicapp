import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from '../song-container/Song';
import { LikesService } from '../likes.service';

@Component({
  selector: 'app-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrl: './like-btn.component.scss'
})
export class LikeBtnComponent {
  @Input()
  liked: boolean

  @Input()
  song: Song

  @Output()
  likedChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private likeService: LikesService,
  ) {}
  
  likeSong(): void {
    if (!this.liked) {
      this.liked = true
      this.song.liked = true
      this.likeService.addToLiked(this.song)
    }

    else {
      this.liked = false
      this.song.liked = false
      this.likeService.removeFromLiked(this.song)
    }

    this.likedChange.emit(this.liked)
  }
}