import { Component, OnInit, SecurityContext } from '@angular/core';
import { Episodio } from '../../models/episodio.model';
import { DomSanitizer } from '@angular/platform-browser';
import { EpisodiosService } from '../../services/episodios.service';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent implements OnInit {

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



  protected validUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.episodios[0].urlEpisodio);
  }
}
