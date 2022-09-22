import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinoquioPage } from './pinoquio.page';

const routes: Routes = [
  {
    path: '',
    component: PinoquioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinoquioPageRoutingModule {}
