import { Track } from "./track";

export interface TracklistContent {
    href: string;
    items: Array<Track>;
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}
