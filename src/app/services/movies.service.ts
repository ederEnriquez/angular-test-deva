import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IMovie{
  cast: string[];
  genres: string[];
  title: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies():Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json');
  }
}
