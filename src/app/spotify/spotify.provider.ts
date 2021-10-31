import { from, Observable } from 'rxjs';
import { SpotifyTrackList } from '../models/spotify.tracklist';
import { Spotify } from './spotify';

export class SpotifyProvider {
    /**
     * Request an authentication token
     */
    getAccessToken() {
        return Spotify.getAccessToken();
    }

    /**
     * Search for a track name with the Spotify search API
     */
    search(searchTerm: string) {
        return from(Spotify.search(searchTerm)) as Observable<SpotifyTrackList>;
    }

    /**
     * Find the current user id with the Spotify API
     */
    getUserId() {
        return Spotify.userId();
    }

    /**
     * Create a new playlist with the Spotify API
     */
    createPlaylist(playlistName: string) {
        return Spotify.createPlaylist(playlistName);
    }

    /**
     * Add tracks to a playlist with the Spotify API
     */
    addTracks(playlistName: string, playlistTracks: object[]) {
        return Spotify.addTracks(playlistName, playlistTracks);
    }
}