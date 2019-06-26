import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodioListComponent } from './public/modules/episodios/components/episodio-list/episodio-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: EpisodioListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
