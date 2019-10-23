import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "./../../peliculas.service";

@Component({
  selector: 'app-peliculas-populares',
  templateUrl: './peliculas-populares.component.html',
  styleUrls: ['./peliculas-populares.component.css']
})
export class PeliculasPopularesComponent implements OnInit {
  peliculas: Array<Object>;
  constructor(public peliculasService: PeliculasService) { }

  ngOnInit() {
    this.peliculasService.getList().subscribe(films => {
      console.log(films);
      this.peliculas = films;    });
  }

}
