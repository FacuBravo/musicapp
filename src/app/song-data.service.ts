import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './song-container/Song';

const URL = "https://666f0a1ef1e1da2be521cf51.mockapi.io/songs"

@Injectable({
  providedIn: 'root'
})
export class SongDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Song[]> {
    return this.http.get<Song[]>(URL)
  }
}