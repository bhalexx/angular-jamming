import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Track } from '../models/track.model';
import { TrackList } from '../models/tracklist.model';
import { SpotifyProvider } from '../spotify/spotify.provider';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  searchInput: string = '';
  tracks: Track[];

  constructor(private spotifyProvider: SpotifyProvider) { }
  
  ngOnInit() {
  }

  onSubmit() {
    const searchTerms = this.searchInput;
    let spotifyTrackList$ = this.spotifyProvider.search(searchTerms);
    const trackList$ = spotifyTrackList$.pipe(map(trackList => { return new TrackList(trackList.tracks.items); }));
    trackList$.subscribe({
      next: value => this.tracks = value.getTracks(),
      error: value => console.log(value)
    });
  }
}
