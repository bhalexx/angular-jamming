import { Track } from './track.model';

export class TrackList {
    private tracks: Track[];

    constructor(tracks?: Track[]) { 
        if (typeof tracks !== 'undefined') {
            this.tracks = tracks;
        }
    }

    getTracks() {
        return this.tracks;
    }

    addTrack(track: Track) {
        this.tracks.push(track);
    }

    removeTrack(track: Track) {
        this.tracks.splice(this.tracks.findIndex(t => t.id === track.id), 1);
    }
}