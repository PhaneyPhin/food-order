import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { MyServiceProvider } from '../../providers/my-service/my-service';
import { SetTablePage } from '../set-table/set-table';

/**
 * Generated class for the GettingStartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getting-start',
  templateUrl: 'getting-start.html',
})
export class GettingStartPage {

  constructor(public toastCtrl:ToastController,public myservice:MyServiceProvider,public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
  }
  username:any;
  password:any;
  ionViewDidLoad() {
   
  }
  gototabs(){
    this.navCtrl.setRoot(TabsPage);
  }
  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  login(){
    var data={username:this.username,password:this.password};
    this.myservice.postData(data, 'logins').subscribe((result) => {
      console.log(result);
      let a: any;
      a = result;
      a = JSON.parse(a._body);
      var data=a;
      if(data.status){
        if(data.status=="success"){
          this.myservice.store_id=data.store_id;
          this.navCtrl.setRoot(SetTablePage);
        }else{
          this.presentToast('connection error please try angain');
        }
      }else{
        this.presentToast('Invalid Email or Password')
      }
    },(err)=>{
      this.presentToast('connection error please try angain');
     // this.navCtrl.setRoot(SetTablePage);
    });
  }

}
