import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OCarinhaPageRoutingModule } from './o-carinha-routing.module';

import { OCarinhaPage } from './o-carinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OCarinhaPageRoutingModule
  ],
  declarations: [OCarinhaPage]
})
export class OCarinhaPageModule {}
