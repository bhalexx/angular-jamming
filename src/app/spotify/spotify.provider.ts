import { TrackList } from '../search/tracklist.model';
import { Spotify } from './spotify';

export class SpotifyProvider {
    /**
     * Request an authentication token
     */
    getAccessToken = () => {
        return Spotify.getAccessToken();
    }

    /**
     * Search for a track name with the Spotify search API
     */
    search = (searchTerm: string): Promise<TrackList> => {
        return Spotify.search(searchTerm);
    }

    /**
     * Find the current user id with the Spotify API
     */
    getUserId = (): Promise<object> => {
        return Spotify.userId();
    }

    /**
     * Create a new playlist with the Spotify API
     */
    createPlaylist = (playlistName: string): Promise<object> => {
        return Spotify.createPlaylist(playlistName);
    }

    /**
     * Add tracks to a playlist with the Spotify API
     */
    addTracks = (playlistName: string, playlistTracks: object[]): Promise<object> => {
        return Spotify.addTracks(playlistName, playlistTracks);
    }
}