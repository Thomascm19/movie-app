import { Component } from '@angular/core';
import { PeliculasService } from '../app/services/peliculas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';

  constructor(public ps: PeliculasService) {

    this.ps.getPopulares()
          .subscribe(data => console.log(data));
  }
}
