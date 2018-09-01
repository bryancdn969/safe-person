import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {SignupPage} from "../signup/signup";
import {HomePage} from "../home/home";
import {TranslateService} from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = {"email":"","password":""};
  responseData : any;
  loginErrorString: string;
  requiredData: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public translateService: TranslateService,
              public authService: UserServiceProvider,) {
                this.translateService.get('LOGIN_ERROR').subscribe((value) => {
                  this.loginErrorString = value;
                });
                this.translateService.get('REQUIRED_DATA').subscribe((value) => {
                  this.requiredData = value;
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.userData.email && this.userData.password){
      this.authService.postFormData(this.userData, "login").then((result) =>{
        this.responseData = result;
        console.log(this.responseData);
        if(this.responseData.api_status == 1 ){
          localStorage.setItem('userData',JSON.stringify(this.responseData));
          this.navCtrl.setRoot(HomePage);
        }
        else{
          //this.presentToast(this.loginErrorString);
        }
      }, (err) => {
        console.log(err);
        //this.common.closeLoading();
      });
    }
    else{
      //this.presentToast(this.requiredData);
    }
  }

  go_register(){
    this.navCtrl.push(SignupPage);
  }

}
