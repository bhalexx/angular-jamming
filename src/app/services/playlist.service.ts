import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Track } from '../models/track.model';
import { TrackList } from '../models/tracklist.model';
import { SpotifyProvider } from '../spotify/spotify.provider';

@Injectable()
export class PlaylistService {
    trackList: TrackList = new TrackList();
    trackListSubject = new Subject<TrackList>();

    constructor(private spotifyProvider: SpotifyProvider) { }

    emitTracksSubject() {
        this.trackListSubject.next(this.trackList);
    }

    addToPlaylist(track: Track): void {
        // Add track only if not alreay existing in tracklist
        const alreadyExists = this.trackList.getTracks().find((t) => t.id === track.id);
        if (!alreadyExists) {
            this.trackList.addTrack(track);
            this.emitTracksSubject();
        }
    }

    removeFromPlaylist(track: Track): void {
        this.trackList.removeTrack(track);
        this.emitTracksSubject();
    }

    savePlaylist(playlistName: string): void {
        this.spotifyProvider.addTracks(playlistName, this.trackList.tracks.items).then((data) => {
            alert('Playlist créée avec succès');
            this.resetPlaylist();
            window.open('https://open.spotify.com/collection/playlists');
        });
    }

    resetPlaylist(): void {
        this.trackList = new TrackList();
        this.emitTracksSubject();
    }
}