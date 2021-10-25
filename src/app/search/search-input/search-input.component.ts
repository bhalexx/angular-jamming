import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() searchInput: string = '';

  constructor(private searchService: SearchService) { }
  
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const searchTerms = form.value['searchTerms'];
    this.searchService.search(searchTerms);
  }
}
