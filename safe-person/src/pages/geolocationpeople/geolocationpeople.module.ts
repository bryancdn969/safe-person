import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeolocationpeoplePage } from './geolocationpeople';

@NgModule({
  declarations: [
    GeolocationpeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(GeolocationpeoplePage),
  ],
})
export class GeolocationpeoplePageModule {}
