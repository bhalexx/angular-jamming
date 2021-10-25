import { Injectable } from '@angular/core';
import { SpotifyProvider } from '../spotify/spotify.provider';
import { Subject } from 'rxjs';
import { TrackList } from './tracklist.model';

@Injectable()
export class SearchService {
    tracklist: TrackList;
    tracksSubject = new Subject<TrackList>();  
    
    constructor(private spotifyProvider: SpotifyProvider) { }

    emitTracksSubject() {
        this.tracksSubject.next(this.tracklist);
    }

    search = (searchTerms: string) => {        
        this.spotifyProvider.search(searchTerms).then((data: TrackList) => {
            this.tracklist = data;
            this.emitTracksSubject();
        });
    }
}