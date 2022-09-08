import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokerPage } from './joker.page';

const routes: Routes = [
  {
    path: '',
    component: JokerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokerPageRoutingModule {}
