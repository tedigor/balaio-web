import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodioComponent } from './public/modules/episodios/components/episodio/episodio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: EpisodioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
