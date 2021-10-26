import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { Track } from '../../models/track.model';
import { TrackList } from '../../models/tracklist.model';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy  {

  tracks: Array<Track> = [];
  trackListSubscription: Subscription;

  constructor(private searchService: SearchService, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.trackListSubscription = this.searchService.tracksSubject.subscribe((value: TrackList) => {
        this.updateTracks();        
      },
      (error) => {
        console.log('error' + error);
      },
      () => {
        console.log('observable complete!');
      }
    );
  }

  ngOnDestroy(): void {
    this.trackListSubscription.unsubscribe();
  }

  updateTracks(): void {
    this.tracks = this.searchService.trackList.tracks.items;
  }

  onAddToPlaylist(track: Track): void {
    this.playlistService.addToPlaylist(track);
  }
}
