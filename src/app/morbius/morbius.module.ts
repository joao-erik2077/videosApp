import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorbiusPageRoutingModule } from './morbius-routing.module';

import { MorbiusPage } from './morbius.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MorbiusPageRoutingModule
  ],
  declarations: [MorbiusPage]
})
export class MorbiusPageModule {}
