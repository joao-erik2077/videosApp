import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OCarinhaPage } from './o-carinha.page';

const routes: Routes = [
  {
    path: '',
    component: OCarinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OCarinhaPageRoutingModule {}
