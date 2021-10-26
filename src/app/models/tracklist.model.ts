import { Track } from './track.model';
import { TrackListContent } from './tracklist.content.model';

export class TrackList {
    tracks: TrackListContent = new TrackListContent();

    constructor() { }

    public addTrack(track: Track): void {
        this.tracks.addTrack(track);
    }

    public removeTrack(track: Track): void {
        this.tracks.removeTrack(track);
    }

    public getTracks(): Array<Track> {
        return this.tracks.getTracks();
    }
}