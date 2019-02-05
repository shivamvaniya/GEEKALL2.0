import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobilesPage } from './mobiles';

@NgModule({
  declarations: [
    MobilesPage,
  ],
  imports: [
    IonicPageModule.forChild(MobilesPage),
  ],
})
export class MobilesPageModule {}
