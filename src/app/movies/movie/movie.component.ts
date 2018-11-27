import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../../data.service';
import { Movie } from './movie.model'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie = new Movie();

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe(params => {
      this.dataService.searchMovieById(params["id"])
        .subscribe(res => {
          this.movie.Title = res["Title"];
          this.movie.Poster = res["Poster"];
          this.movie.Actors = res["Actors"];
          this.movie.Awards = res["Awards"];
          this.movie.Country = res["Country"];
          this.movie.Released = res["Released"];
          this.movie.DVD = res["DVD"];
          this.movie.Runtime = res["Runtime"];
          this.movie.Director = res["Director"];
          this.movie.Writer = res["Writer"];
          this.movie.Production = res["Production"];
          this.movie.Genre = res["Genre"];
          this.movie.Type = res["Type"];
          this.movie.Language = res["Language"];
          this.movie.Plot = res["Plot"];
        })
    });
  }

  ngOnInit() { }
}
