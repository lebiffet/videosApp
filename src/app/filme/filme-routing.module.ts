import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmePage } from './filme.page';

const routes: Routes = [
  {
    path: '',
    component: FilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmePageRoutingModule {}
