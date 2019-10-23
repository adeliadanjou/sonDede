import { PeliculasService } from "./../peliculas.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit {
  title: String = "Peliculas";


  constructor(public peliculasService: PeliculasService) {}

  ngOnInit() {
    

  }
}
