import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {LoginPage} from "../login/login";
import {SignupPage} from "../signup/signup";
import {TranslateService} from '@ngx-translate/core';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  loginErrorString: string;
  requiredData: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public translateService: TranslateService) {
    
      this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
    this.translateService.get('REQUIRED_DATA').subscribe((value) => {
      this.requiredData = value;
    });
  }

  ionViewDidLoad() {
    console.log('ion.puViewDidLoad WelcomePage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }
}
