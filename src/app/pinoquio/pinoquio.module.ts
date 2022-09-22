import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinoquioPageRoutingModule } from './pinoquio-routing.module';

import { PinoquioPage } from './pinoquio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinoquioPageRoutingModule
  ],
  declarations: [PinoquioPage]
})
export class PinoquioPageModule {}
