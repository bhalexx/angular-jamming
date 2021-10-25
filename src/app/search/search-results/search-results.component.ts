import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { SearchService } from '../search.service';
import { Track } from '../track.model';
import { TrackList } from '../tracklist.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  trackList: TrackList;
  tracks: Array<Track> = [];
  tracksSubject: Subject<TrackList>;

  constructor(private searchService: SearchService) { 
    this.tracksSubject = searchService.tracksSubject;
  }

  ngOnInit(): void {
    this.tracksSubject.subscribe((value: TrackList) => {
        this.trackList = value;
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

  updateTracks(): void {
    this.trackList.tracks.items.forEach(element => {
      this.tracks.push(element);
    });
  }

  onAddToPlaylist(track: Track): void {
    console.log(track);
  }

}
