import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiket: string = "527477abd60ecfc97d050ec6fe5bd198";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=populariry.desc&api_key=${this.apiket}&lenguage=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '')
          .pipe(map( (res: any) => res ));
  }
}
