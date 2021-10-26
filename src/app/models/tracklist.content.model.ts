import { Track } from './track.model';

export class TrackListContent {
    href: string = '';
    items: Array<Track> = [];
    limit: number = 0;
    next: string = '';
    offset: number = 0;
    previous: null = null;
    total: number = 0;

    addTrack(track: Track): void {
        this.items.push(track);
    }

    removeTrack(track: Track): void {
        console.log(this.items.findIndex(t => t.id === track.id));
        console.log(this.items.length);
        this.items.splice(this.items.findIndex(t => t.id === track.id), 1);
        console.log(this.items.length);
    }

    getTracks(): Array<Track> {
        return this.items;
    }
}