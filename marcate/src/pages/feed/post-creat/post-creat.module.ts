import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostCreatPage } from './post-creat';

@NgModule({
  declarations: [
    PostCreatPage,
  ],
  imports: [
    IonicPageModule.forChild(PostCreatPage),
  ],
})
export class PostCreatPageModule {}
