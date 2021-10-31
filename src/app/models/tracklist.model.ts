import { Track } from './track.model';
import { SpotifyTrackListContent } from './spotify.tracklist.content.model';

export class TrackList {
    private tracks: Track[];

    constructor(tracks: Track[]) { 
        this.tracks = tracks;
    }

    public getTracks() {
        return this.tracks;
    }

    addTrack(track: Track) {
        this.tracks.push(track);
    }

    removeTrack(track: Track) {
        this.tracks.splice(this.tracks.findIndex(t => t.id === track.id), 1);
    }
}