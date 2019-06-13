import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodiosModule } from './modules/episodios/episodios.module';

@NgModule({
  declarations: [],
  imports: [
    EpisodiosModule,
    CommonModule
  ],
  exports: [EpisodiosModule]
})
export class PublicModule { }
