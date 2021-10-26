import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Track } from '../models/track.model';
import { TrackList } from '../models/tracklist.model';
import { PlaylistService } from '../services/playlist.service';
import { SpotifyProvider } from '../spotify/spotify.provider';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit, OnDestroy {

  trackList: TrackList;
  tracks: Array<Track> = [];
  trackListSubscription: Subscription;

  constructor(private playlistService: PlaylistService, private spotifyProvider: SpotifyProvider) { }

  ngOnInit(): void {
    this.trackListSubscription = this.playlistService.trackListSubject.subscribe((value: TrackList) => {
        this.trackList = value;
        this.updateTracks();        
      },
      (error) => {
        console.log('error' + error);
      },
      () => {
        console.log('observable complete!');
      }
    );
  }

  ngOnDestroy(): void {
    this.trackListSubscription.unsubscribe();
  }

  onRemoveFromPlaylist(track: Track): void {
    this.playlistService.removeFromPlaylist(track);
  }

  updateTracks(): void {
    this.tracks = this.trackList.tracks.items;
  }

  onSave(): void {
    const playlistName = prompt('quel nom pour la playlist?');
    if (playlistName !== '' && playlistName !== null) {
      this.spotifyProvider.addTracks(playlistName, this.tracks).then((data) => {
        console.log(data);
        alert('Playlist créée avec succès');
        this.playlistService.resetPlaylist();
        window.open('https://open.spotify.com/collection/playlists');
      });
    } else {
      this.onSave();
    }
  }
}
