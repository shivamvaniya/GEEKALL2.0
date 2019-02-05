
import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { AboutUsPage } from '../pages/about-us/about-us';
import { MobilesPage } from '../pages/mobiles/mobiles';
import { ComparisonPage } from '../pages/comparison/comparison';
import { AccessoriesPage } from '../pages/accessories/accessories';
import { ExchangeZonePage } from '../pages/exchange-zone/exchange-zone';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';
import { AntutuPage } from '../pages/antutu/antutu';
import { QuizPage } from '../pages/quiz/quiz';
import { DxoMarkPage } from '../pages/dxo-mark/dxo-mark';
import { XdaDevelopersPage } from '../pages/xda-developers/xda-developers';
import { HelpdeskPage } from '../pages/helpdesk/helpdesk';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    AboutUsPage,
    MobilesPage,
    ComparisonPage,
    AccessoriesPage,
    ExchangeZonePage,
    QuizPage,
    NewsfeedPage,
    DxoMarkPage,
    AntutuPage,
    XdaDevelopersPage,
    HelpdeskPage,
    NotificationsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    AboutUsPage,
    MobilesPage,
    ComparisonPage,
    AccessoriesPage,
    ExchangeZonePage,
    QuizPage,
    NewsfeedPage,
    DxoMarkPage,
    AntutuPage,
    XdaDevelopersPage,
    HelpdeskPage,
    NotificationsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
