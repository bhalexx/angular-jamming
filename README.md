# AngularJamming

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Instructions
Convert Jamming React app to Angular app, following those rules:
- Utiliser RxJS au maximum quand c’est intéressant
- Réencapsuler Spotifiy.js sans le modifier pour le proposer sous la forme d’un bloc de construction standard Angular
- Utiliser VS Code pour coder

## Some words about the development
### Spotify
Had to edit two small things inside Spotify.js : search "// modification needed here." to find where.
Created a matching definition file (`app/spotify/spotify.d.ts`) and a SpotifyProvider (`app/spotify/spotify.provider.ts`) to be able to use (`app/spotify/`)Spotify.js methods without editing the original file.

### Components
Three components were created:
1. Search input (`app/components/search/search-input`)
2. Search results (`app/components/search/search-results`)
3. Playlist (`app/components/playlist`)

A SearchService (`app/services/search.service.ts`) is injected in both of the search components and used as a bridge between those two. SearchResults are updated by SearchService observable (subject) subscription.

The Playlist component (`app/services/playlist.service.ts`) is following the same way: a PlaylistService has been created to manage functionnal code and call Spotify methods using SpotifyProvider. Playlist component is updated by PlaylistService observable (subject) subscription.

### Models
Models (`app/models`) were created to be able to validate TS code and be more precise about functions' expecting/returning data and use Spotify data in component's views.
There surely is another better way to organize code, would like to hear/read/learn about it!

### Git flow
Used as much as possible the Git flow and tried to get familiar with Kanban way.
Following [this project table](https://github.com/bhalexx/angular-jamming/projects/1) feature branches were created (e.g. `feature/#feature8`) to do what feature card expected. When a feature was fully created, feature branch were merged with the develop one.
