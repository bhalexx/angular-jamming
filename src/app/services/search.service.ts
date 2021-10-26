import { Injectable } from '@angular/core';
import { SpotifyProvider } from '../spotify/spotify.provider';
import { Subject } from 'rxjs';
import { TrackList } from '../models/tracklist.model';

@Injectable()
export class SearchService {
    trackList: TrackList;
    trackList$ = new Subject<TrackList>();  
    
    constructor(private spotifyProvider: SpotifyProvider) { }

    emitTrackListSubject() {
        this.trackList$.next(this.trackList);
    }

    search = (searchTerms: string) => {        
        this.spotifyProvider.search(searchTerms).then((data: TrackList) => {
            this.trackList = data;
            this.emitTrackListSubject();
        });
    }
}