import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GettingStartPage } from './getting-start';

@NgModule({
  declarations: [
    GettingStartPage,
  ],
  imports: [
    IonicPageModule.forChild(GettingStartPage),
  ],
})
export class GettingStartPageModule {}
