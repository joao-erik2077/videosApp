import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MorbiusPage } from './morbius.page';

const routes: Routes = [
  {
    path: '',
    component: MorbiusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MorbiusPageRoutingModule {}
