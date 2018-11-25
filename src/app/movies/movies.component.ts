import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() movies: [];
  swipe_left: string;
  swipe_right: string;
  
  constructor() { 
    this.swipe_left = "/assets/images/swipe_left.png"
    this.swipe_right = "/assets/images/swipe_right.png"
  }

  ngOnInit() {
  }

}
