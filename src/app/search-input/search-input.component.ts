import { Component, EventEmitter, Output } from '@angular/core';
import { Search } from '../search';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  terms = "";

  @Output()
  searched = new EventEmitter<Search>();

  search() {
    console.log(`searched: ${this.terms}`);
    this.searched.emit({ terms: this.terms });
  }
}
