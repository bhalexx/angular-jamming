import { Injectable } from '@angular/core';
import { SpotifyProvider } from '../spotify/spotify.provider';
import { Subject } from 'rxjs';
import { TrackList } from '../models/tracklist.model';

@Injectable()
export class SearchService {
    trackList: TrackList;
    tracksSubject = new Subject<TrackList>();  
    
    constructor(private spotifyProvider: SpotifyProvider) { }

    emitTracksSubject() {
        this.tracksSubject.next(this.trackList);
    }

    search = (searchTerms: string) => {        
        this.spotifyProvider.search(searchTerms).then((data: TrackList) => {
            this.trackList = data;
            this.emitTracksSubject();
        });
    }
}