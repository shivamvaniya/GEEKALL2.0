
import { Component, ViewChild  } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { AboutUsPage } from '../pages/about-us/about-us';
import { MobilesPage } from '../pages/mobiles/mobiles';
import { ExchangeZonePage } from '../pages/exchange-zone/exchange-zone';
import { DxoMarkPage } from '../pages/dxo-mark/dxo-mark';
import { ComparisonPage } from '../pages/comparison/comparison';
import { AccessoriesPage } from '../pages/accessories/accessories';
import { QuizPage } from '../pages/quiz/quiz';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';
import { AntutuPage } from '../pages/antutu/antutu';
import { XdaDevelopersPage } from '../pages/xda-developers/xda-developers';
import { HelpdeskPage } from '../pages/helpdesk/helpdesk';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: MainPage },
      { title: 'About Us', component: AboutUsPage },
      { title: 'Mobiles', component: MobilesPage },
      { title: 'Comparison', component: ComparisonPage },
      { title: 'Accessories', component: AccessoriesPage },
      { title: 'Exchange Zone', component: ExchangeZonePage },
      { title: 'Quiz', component: QuizPage },
      { title: 'NewsFeed', component: NewsfeedPage },
      { title: 'DXO-Mark', component: DxoMarkPage },
      { title: 'AnTuTu', component: AntutuPage },
      { title: 'XDA-Developers', component: XdaDevelopersPage },
      { title: 'Helpdesk', component: HelpdeskPage },
      { title: 'Notification', component: NotificationsPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Logout', component: HomePage}
    ];
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
