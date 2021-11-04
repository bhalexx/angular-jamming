import { Component, OnInit } from '@angular/core';
import { Search } from './search';
import { SpotifyProvider } from './spotify/spotify.provider';
import { Track } from './track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Jamming';
  search: Search;
  track: Track;

  constructor(private readonly spotify: SpotifyProvider) { }

  ngOnInit() {
    this.spotify.getUserId();
  }

  onSearch(search: Search) {
    this.search = search;
  }

  onTrackAdded(track: Track) {
    console.log(track);
    this.track = track;
  }
}
