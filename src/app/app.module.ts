import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SobrePage } from '../pages/sobre/sobre';
import { OutrasPage } from '../pages/outras/outras';
import { TopPage } from '../pages/top/top';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpModule } from '@angular/http'; 
import { MoedasProvider } from '../providers/moedas/moedas'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SobrePage,
    OutrasPage,
    TopPage,
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
    SobrePage,
    OutrasPage,
    TopPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
