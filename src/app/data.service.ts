import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  URL: string = 'http://www.omdbapi.com/?plot=full&apikey='
  API_KEY: string = '63fc0356'

  constructor(private http: HttpClient) { }

  searchMovieByName(query: string = "Harry Potter"){
    return this.http.get(`${this.URL}${this.API_KEY}&s=${query}`);
  }

  searchMovieById(id: string){
    return this.http.get(`${this.URL}${this.API_KEY}&i=${id}`)
  }
}