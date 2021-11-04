import { Component, Input } from '@angular/core';
import { SpotifyProvider } from '../spotify/spotify.provider';
import { Track } from '../track';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
  tracks: Track[] = [];

  @Input()
  set addedTrack(value: Track | undefined) {
    if (typeof value !== 'undefined') {
      this.tracks.push(value);
    }
  }

  constructor(private readonly spotify: SpotifyProvider) { }

  onRemoveTrack(track: Track) {
    this.tracks = this.tracks.filter(t => t.id !== track.id);
  }

  onSave() {
    const name = prompt("Give the playlist a name:");

    if (typeof name === 'string') {
      this.spotify.addTracks(name, this.tracks)
        .subscribe({
          error: () => alert(`Impossible to save playlist ${name} :(`),
          complete: () => { 
            this.tracks = [];
            window.open('https://open.spotify.com/collection/playlists');
          }
        });
    }
  }
}
