import { Track } from './track.model';

export class TrackListContent {
    href: string;
    items: Array<Track>;
    limit: number;
    next: string;
    offset: number = 0;
    previous: null;
    total: number = 0;
}