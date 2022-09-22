import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Minions2PageRoutingModule } from './minions2-routing.module';

import { Minions2Page } from './minions2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Minions2PageRoutingModule
  ],
  declarations: [Minions2Page]
})
export class Minions2PageModule {}
