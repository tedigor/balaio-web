import { Component, OnInit, SecurityContext } from '@angular/core';
import { Episodio } from '../../models/episodio.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent implements OnInit {

  episodio: Episodio = {
    nome: "#32 - Balaio de Mala e Cuia",
    categoria: "Viagens",
    descricao: "Arruma-a-mala-ae, balaieiros e balaieiras! De Caicó ao Marrocos, o Balaio vai ganhar o mundo! Subam na nossa humilde rural e vamos meter o pé na estrada juntos.",
    urlEpisodio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/631346241&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  validUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.episodio.urlEpisodio);

  }
}
