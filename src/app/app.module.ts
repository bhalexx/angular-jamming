import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SpotifyProvider } from './spotify/spotify.provider';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    SpotifyProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
