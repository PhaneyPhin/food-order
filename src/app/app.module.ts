import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyServiceProvider } from '../providers/my-service/my-service';
import { HttpModule } from '@angular/http';//add this for using http protocal
import { BuyPage } from '../pages/buy/buy';
import { MenuPage } from '../pages/menu/menu';
import { DetailPage } from '../pages/detail/detail';
import { GettingStartPage } from '../pages/getting-start/getting-start';
import { SetTablePage } from '../pages/set-table/set-table';
import { SQLite } from '../../node_modules/@ionic-native/sqlite';
import { Toast } from '../../node_modules/@ionic-native/toast';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MenuPage,
    DetailPage,
    BuyPage,
    GettingStartPage,
    SetTablePage,

    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BuyPage,
    MenuPage,
    DetailPage,
    GettingStartPage,
    SetTablePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyServiceProvider,
    SQLite,
    Toast
  ]
})
export class AppModule {}
