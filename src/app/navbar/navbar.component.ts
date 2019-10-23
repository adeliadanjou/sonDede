
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isFilmClicked: boolean = false;
  isSeriesClicked: boolean = false;

  @Input() title: String 

  isSearch: boolean = false;

  constructor() {}
 
 activateSearch(){
   this.isSearch = !this.isSearch
 }

 filmClick(){
   this.isFilmClicked = !this.isFilmClicked;
 }

 seriesClick(){
  this.isSeriesClicked = !this.isSeriesClicked;
}
  ngOnInit() {
  }

}
