import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sonic2Page } from './sonic2.page';

const routes: Routes = [
  {
    path: '',
    component: Sonic2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sonic2PageRoutingModule {}
