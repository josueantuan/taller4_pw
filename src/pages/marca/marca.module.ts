import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarcaPage } from './marca';

@NgModule({
  declarations: [
    MarcaPage,
  ],
  imports: [
    IonicPageModule.forChild(MarcaPage),
  ],
})
export class MarcaPageModule {}
