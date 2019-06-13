import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodioComponent } from './components/episodio/episodio.component';
import { EpisodioListComponent } from './components/episodio-list/episodio-list.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule({
  declarations: [EpisodioComponent, EpisodioListComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    EpisodioComponent,
    EpisodioListComponent

  ]
})
export class EpisodiosModule { }
