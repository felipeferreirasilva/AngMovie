import { Component, OnInit, Input } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() title: string;
  @Input() searchMovies;
  query: string;
  faFilm = faFilm;

  constructor() { }

  ngOnInit() {
  }

  onSearchMovies = () => {
    if(this.query !== undefined){
      this.searchMovies(this.query)
    }
  }

}
