import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  query: string;
  @Input() searchMovies;

  constructor() { }

  onSearchMovies = () => {
    if(this.query !== undefined){
      this.searchMovies(this.query)
    }
  }
  
}
