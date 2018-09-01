import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController,ToastController } from 'ionic-angular';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {
  public loader: any;
  constructor(public http: HttpClient, public loadingCtrl: LoadingController,public toastCtrl:ToastController) {
    console.log('Hello CommonProvider Provider');
  }

  presentLoading(){
    this.loader = this.loadingCtrl.create({content: ""})
    this.loader.present();
  }

  closeLoading(){
    this.loader.dismiss();
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
