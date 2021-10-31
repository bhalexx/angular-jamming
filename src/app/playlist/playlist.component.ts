import { Component, OnInit } from '@angular/core';
import { Track } from '../models/track.model';
import { TrackList } from '../models/tracklist.model';
import { SpotifyProvider } from '../spotify/spotify.provider';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  trackList: TrackList = new TrackList();

  constructor(private spotifyProvider: SpotifyProvider) { }

  ngOnInit() {
  }

  onAddToPlaylist(track: Track) {
    // Add track only if not already existing in tracklist
    const alreadyExists = this.trackList.getTracks().find((t) => t.id === track.id);
    if (!alreadyExists) {
        this.trackList.addTrack(track);         
    }
  }

  onRemoveFromPlaylist(track: Track) {
    this.trackList.removeTrack(track);
  }

  async onSave() {
    const playlistName = prompt('Give the playlist a name:');
    
    if (playlistName !== '' && playlistName !== null) {
      const spotifyPlaylist = await this.spotifyProvider.addTracks(playlistName, this.trackList.getTracks());
      if (spotifyPlaylist.snapshot_id) {
        alert('Playlist successfully created!');
        this.resetPlaylist();
        window.open('https://open.spotify.com/collection/playlists');
      }
    }
  }

  resetPlaylist() {
    this.trackList = new TrackList();
  }
}
