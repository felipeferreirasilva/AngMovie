import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: {} = {};

  constructor(private route: ActivatedRoute, private dataService: DataService) { 
    this.route.params.subscribe(params => {
      this.dataService.searchMovieById(params["id"])
      .subscribe(response => {
        console.log(response)
        this.movie = response;
      })
    });
  }

  ngOnInit() { }
}
