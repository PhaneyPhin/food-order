import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { GettingStartPage } from '../pages/getting-start/getting-start';
import { HomePage } from '../pages/home/home';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';
import { MyServiceProvider } from '../providers/my-service/my-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = GettingStartPage;
  // rootPage:any=TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private sqlite:SQLite,private myservice:MyServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.sqlite.create({
        name: 'ionicdb1.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS tables(table_id INTEGER PRIMARY KEY, store_id INTEGER)', [])
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));
        
        db.executeSql('SELECT * FROM tables where true', [])
        .then(res => {
        
        if(res.rows.length>0){
          this.myservice.table=res.rows.item(0).table_id;
          this.myservice.store_id=res.rows.item(0).store_id;
          this.rootPage=TabsPage;

        }
      }).catch(e=>{alert("can't select")})
      }).catch(e => alert(e.message));
      statusBar.styleDefault();
      splashScreen.hide();
     
        
    
    });
  }
}
