import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-contacfriend',
  templateUrl: 'contacfriend.html',
})
export class ContacfriendPage {
  loginErrorString: string;
  requiredData: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public translateService: TranslateService) {
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
    this.translateService.get('REQUIRED_DATA').subscribe((value) => {
      this.requiredData = value;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContacfriendPage');
  }

}
