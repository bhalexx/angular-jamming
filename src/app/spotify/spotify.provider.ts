import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Track } from '../track';
import { Tracklist } from '../tracklist';
import { Spotify } from './spotify';

@Injectable({
    providedIn: 'root'
})
export class SpotifyProvider {
    /**
     * Request an authentication token
     */
    getAccessToken() {
        return Spotify.getAccessToken() as string;
    }

    /**
     * Search for a track name with the Spotify search API
     */
    search(terms: string) {
        return from(Spotify.search(terms) as Promise<Tracklist>);
    }

    /**
     * Find the current user id with the Spotify API
     */
    getUserId() {
        return from(Spotify.userId() as Promise<object>);
    }

    /**
     * Create a new playlist with the Spotify API
     */
    createPlaylist(name: string) {
        return from(Spotify.createPlaylist(name) as Promise<object>);
    }

    /**
     * Add tracks to a playlist with the Spotify API
     */
    addTracks(playlistName: string, tracks: Track[]) {
        return from(Spotify.addTracks(playlistName, tracks) as Promise<object>);
    }
}