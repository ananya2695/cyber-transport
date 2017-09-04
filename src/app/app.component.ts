import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App, ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Observable } from 'rxjs/Observable';

// import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
// import { FormsPage } from '../pages/forms/forms';
// import { LayoutsPage } from '../pages/layouts/layouts';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { TabtransPage } from "../pages/tabtrans/tabtrans";
import { HomeListComponent } from "../components/home-list/home-list";
import { RegisterPage } from "../pages/register/register";
// import { SettingsPage } from '../pages/settings/settings';
// import { FunctionalitiesPage } from '../pages/functionalities/functionalities';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AddPickupAddressPage } from "../pages/add-pickup-address/add-pickup-address";
import { PickupDatePage } from "../pages/pickup-date/pickup-date";
import { PickupTimePage } from "../pages/pickup-time/pickup-time";
import { NumberParcelPage } from "../pages/number-parcel/number-parcel";

@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make WalkthroughPage the root (or first) page

  rootPage: any = PickupDatePage;



  // rootPage: any = FunctionalitiesPage;
  // rootPage: any = TabsNavigationPage;
  textDir: string = "ltr";

  pages: Array<{title: any, icon: string, component: any}>;
  pushPages: Array<{title: any, icon: string, component: any}>;

  constructor(
    platform: Platform,
    public menu: MenuController,
    public app: App,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public translate: TranslateService,
    public toastCtrl: ToastController
  ) {
    translate.setDefaultLang('en');
    translate.use('en');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        if(event.lang == 'ar')
        {
          platform.setDir('rtl', true);
          platform.setDir('ltr', false);
        }
        else
        {
          platform.setDir('ltr', true);
          platform.setDir('rtl', false);
        }
        
      });

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  pushPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.app.getRootNav().push(page.component);
  }
}
