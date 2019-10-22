import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

 title: String = "Series"

  constructor() { }

  ngOnInit() {
  }

}
