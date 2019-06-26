import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../../services/episodios.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Episodio } from '../../models/episodio.model';

@Component({
  selector: 'app-episodio-list',
  templateUrl: './episodio-list.component.html',
  styleUrls: ['./episodio-list.component.css']
})
export class EpisodioListComponent implements OnInit {

  episodios: Array<Episodio> = [];
  
  constructor(
    private episodiosService: EpisodiosService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getEpisodios();
  }
  
  private getEpisodios() {
    this.episodiosService.getEpisodios().subscribe(episodios => {
      this.episodios = episodios;
    });
  }
  protected validUrl(urlEpisodio: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlEpisodio);
  }

}
