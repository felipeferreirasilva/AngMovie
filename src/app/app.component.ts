import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component'
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angmovie'.toUpperCase();
  movies: [] = [];

  constructor(private dataService: DataService) {
    this.dataService.searchMovieByName()
      .subscribe(response => {
        this.movies = response["Search"];
      })
  }

  searchMovies = (query: string) => {
    this.dataService.searchMovieByName(query)
      .subscribe(response => {
        this.movies = response["Search"];
        console.log(this.movies)
      })
  }

}
