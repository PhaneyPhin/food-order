import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastCmp, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '../../../node_modules/@ionic-native/toast';
import { TabsPage } from '../tabs/tabs';
import { MyServiceProvider } from '../../providers/my-service/my-service';
/**
 * Generated class for the SetTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-table',
  templateUrl: 'set-table.html',
})
export class SetTablePage {
  table_id: any;
  store_id: any;
  constructor(public toastCtrl:ToastController,public myservice: MyServiceProvider, public toast: Toast, public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetTablePage');
  }
  insert() {
    this.myservice.postData({ store_id: this.myservice.store_id, table_id: this.table_id }, "valideTable").subscribe((result) => {
      console.log(result);
      let a: any;
      a = result;
      a = JSON.parse(a._body);
      var data = a;
      if (data.status = "success") {
        this.sqlite.create({
          name: 'ionicdb1.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          db.executeSql('INSERT INTO tables VALUES(?,?)', [this.table_id, this.myservice.store_id])
            .then(res => {
              this.myservice.table=this.table_id;
              this.navCtrl.setRoot(TabsPage);
            })
            .catch(e => {

              alert(e.message);
            })
        }).catch(e => {

          alert(e.message)
        });
      }else{
        this.presentToast('table number not exists in your store');
      }
    }, (err) => {
      this.presentToast('connection error please try again');
    })

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

}
