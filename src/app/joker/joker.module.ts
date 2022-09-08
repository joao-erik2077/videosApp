import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JokerPageRoutingModule } from './joker-routing.module';

import { JokerPage } from './joker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JokerPageRoutingModule
  ],
  declarations: [JokerPage]
})
export class JokerPageModule {}
