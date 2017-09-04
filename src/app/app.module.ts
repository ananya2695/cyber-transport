import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

import { WalkthroughPage } from '../pages/walkthrough/walkthrough';


import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
import { Rating } from '../components/rating/rating';
// import { GoogleMap } from '../components/google-map/google-map';

// import { FacebookLoginService } from '../pages/facebook-login/facebook-login.service';
// import { GoogleLoginService } from '../pages/google-login/google-login.service';
// import { TwitterLoginService } from '../pages/twitter-login/twitter-login.service';
// import { GoogleMapsService } from '../pages/maps/maps.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { EmailComposer } from '@ionic-native/email-composer';

// Functionalities
// import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
// import { MapsPage } from '../pages/maps/maps';
// import { FacebookLoginPage } from '../pages/facebook-login/facebook-login';
// import { GoogleLoginPage } from '../pages/google-login/google-login';
// import { TwitterLoginPage } from '../pages/twitter-login/twitter-login';
// import { ContactCardPage } from '../pages/contact-card/contact-card';
// import { VideoPlaylistPage } from '../pages/video-playlist/video-playlist';

import { VideoPlayerModule } from '../components/video-player/video-player.module';
import { ValidatorsModule } from '../components/validators/validators.module';

import { LanguageService } from '../providers/language/language.service';

import { TabtransPage } from "../pages/tabtrans/tabtrans";
import { HomePage } from "../pages/home/home";
import { SenderActionPage } from "../pages/sender-action/sender-action";
import { BookingPage } from "../pages/booking/booking";
import { SendTrackingNumberPage } from "../pages/send-tracking-number/send-tracking-number";
import { MorePage } from "../pages/more/more";
import { ConfirmPage } from "../pages/confirm/confirm";
import { HomeListComponent } from '../components/home-list/home-list';
import { HomeServiceProvider } from '../pages/home/home.service';
import { ConfirmServiceProvider } from '../pages/confirm/confirm.service';
import { AddressCardComponent } from '../components/address-card/address-card';
import { ComfirmCardComponent } from '../components/comfirm-card/comfirm-card';
import { BookingServiceProvider } from '../pages/booking/booking.service';
import { AddPickupAddressPage } from "../pages/add-pickup-address/add-pickup-address";
import { RegisterPage } from "../pages/register/register";
import { CalculatePage } from "../pages/calculate/calculate";

import { AddpickupaddressServiceProvider } from '../pages/add-pickup-address/add-pickup-address.service';
import { PickupListComponent } from '../components/pickup-list/pickup-list';
import { AddRegisterComponent } from "../components/add-register/add-register";

import { RegisterServiceProvider } from '../pages/register/register.service';
import { CalculateServiceProvider } from '../pages/calculate/calculate.service';



export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    WalkthroughPage,

    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    Rating,
    // GoogleMap,
    TabtransPage,
    ConfirmPage,
    TabtransPage,
    HomeListComponent,
    HomePage,
    SenderActionPage,
    BookingPage,
    SendTrackingNumberPage,
    MorePage,
    AddPickupAddressPage,
    RegisterPage,
    CalculatePage,
    AddressCardComponent,
    AddressCardComponent,
    ComfirmCardComponent,

    PickupListComponent,

    AddRegisterComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    VideoPlayerModule,
    ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WalkthroughPage,
    TabtransPage,
    HomePage,
    SenderActionPage,
    BookingPage,
    SendTrackingNumberPage,
    MorePage,
    AddPickupAddressPage,
    RegisterPage,
    ConfirmPage,
    CalculatePage
  ],
  providers: [
    // GoogleMapsService,
    LanguageService,

    SplashScreen,
    StatusBar,
    SocialSharing,
    NativeStorage,
    InAppBrowser,
    Facebook,
    GooglePlus,
    Keyboard,
    Geolocation,
    TwitterConnect,
    AdMobFree,
    AppRate,
    ImagePicker,
    Crop,
    EmailComposer,
    HomeServiceProvider,
    ConfirmServiceProvider,
    BookingServiceProvider,

    AddpickupaddressServiceProvider,

    RegisterServiceProvider,
    CalculateServiceProvider,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
