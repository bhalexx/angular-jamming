import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SpotifyProvider } from './spotify/spotify.provider';
import { SearchService } from './search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchResultsComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    SpotifyProvider,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
