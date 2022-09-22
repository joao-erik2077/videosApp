import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Minions2Page } from './minions2.page';

const routes: Routes = [
  {
    path: '',
    component: Minions2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Minions2PageRoutingModule {}
