import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentsPage } from './coments';

@NgModule({
  declarations: [
    ComentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ComentsPage),
  ],
})
export class ComentsPageModule {}
