import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodio } from '../models/episodio.model';
import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:8080/' 
@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  constructor(private httpClient: HttpClient) { }


  getEpisodios(): Observable<Array<Episodio>> {
    
    return this.httpClient.get<Array<Episodio>>(`${API}episodios`);
  }
}
