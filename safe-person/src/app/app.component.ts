import {Component, ViewChild} from '@angular/core';
import { Platform, MenuController,App, Nav,Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {WelcomePage} from "../pages/welcome/welcome";
import {GeolocationpeoplePage} from "../pages/geolocationpeople/geolocationpeople";
import { TranslateService } from '@ngx-translate/core';
import { ContacfriendPage} from "../pages/contacfriend/contacfriend";
import { Deploy } from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = WelcomePage;
  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform,private translate: TranslateService,
              public statusBar: StatusBar,private config: Config,
              public splashScreen: SplashScreen,
              public deploy: Deploy,
              public app: App) {
    this.platform.ready().then(() => {
    //platform.ready().then(() => {
      this.pages =[
        { title: 'Ubicacion actual', component: HomePage,icon:'map' },
        { title: 'Geolocalizar personas', component: GeolocationpeoplePage,icon:'people' },
        { title: 'Contactar con un amigo', component: ContacfriendPage,icon:'people' }

      ];
        // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initTranslate();
    });
    this.ngOnInit();
  }

  ngOnInit(): void{
    console.log('checking for snapshot');

    this.deploy.check()
      .then(snapshotAvailable => {
        if (snapshotAvailable) {
          this.deploy.download()
            .then(() => this.deploy.extract()
              .then(() => this.deploy.load()));
        }
      });
  }

  openPage(page) {
    this.nav.push(page.component);
  }

  logoutClicked() {
    console.log("Logout");
    this.platform.exitApp();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('es');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }
}
