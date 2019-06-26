import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent implements OnInit {

 
  @Input() urlEpisodio: string = '';

  constructor() { }

  ngOnInit() {
  }
}
