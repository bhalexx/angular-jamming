import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpotifyProvider } from '../../spotify/spotify.provider';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() searchInput: string = '';

  constructor(private spotifyProvider: SpotifyProvider) { }
  
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const searchTerms = form.value['searchTerms'];
    let results = this.spotifyProvider.search(searchTerms);
    console.log(results);
  }
}
