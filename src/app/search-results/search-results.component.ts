import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Search } from '../search';
import { SpotifyProvider } from '../spotify/spotify.provider';
import { Tracklist } from '../tracklist';
import { Track } from '../track';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  private _tracklist: Tracklist;

  get tracklist() {
    this._tracklist?.tracks?.items.sort((a, b) => b.popularity - a.popularity);
    return this._tracklist;
  }

  @Input()
  set search(value: Search | undefined) {
    if (typeof value !== 'undefined') {
      this.spotify.search(value.terms).subscribe(tracklist => this._tracklist = tracklist);
    }
  }

  @Output()
  addedTrack = new EventEmitter<Track>();

  constructor(private readonly spotify: SpotifyProvider) { }

  onAddTrack(track: Track) {
    this.addedTrack.emit(track);
  }
}
