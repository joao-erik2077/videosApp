import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sonic2PageRoutingModule } from './sonic2-routing.module';

import { Sonic2Page } from './sonic2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sonic2PageRoutingModule
  ],
  declarations: [Sonic2Page]
})
export class Sonic2PageModule {}
