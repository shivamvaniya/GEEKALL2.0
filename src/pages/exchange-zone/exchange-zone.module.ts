import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeZonePage } from './exchange-zone';

@NgModule({
  declarations: [
    ExchangeZonePage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeZonePage),
  ],
})
export class ExchangeZonePageModule {}
