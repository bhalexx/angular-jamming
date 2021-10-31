import { Track } from './track.model';

export class SpotifyTrackListContent {
    href: string = '';
    items: Array<Track> = [];
    limit: number = 0;
    next: string = '';
    offset: number = 0;
    previous: null = null;
    total: number = 0;
}