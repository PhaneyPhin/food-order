import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MyServiceProvider } from '../../providers/my-service/my-service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  ordered: any;
  sum :any;
  condition=true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public myservice: MyServiceProvider, public toastCtrl: ToastController) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad DetailPage');
    let table_id = this.myservice.table;
    this.sum=0;
    this.myservice.postData({ table_id: table_id }, "getOrdered").subscribe((data) => {
      let a: any;
      a = data;
      
      a = JSON.parse(a._body);
      if (a.length == 0) {
        this.condition=false;
      } else {
        this.condition=true;
        this.ordered = a;
        for (let i of a) {
          this.sum += i.num * i.price;
        }
      }
    })
  }
  checkBill() {
    let table_id = this.myservice.table;
    this.myservice.postData({ table_id: table_id }, "checkBill").subscribe((data) => {
      let a: any;
      a = data;
      a = JSON.parse(a._body);
      if (a.status == "success") {
        this.presentToast('Now you have called for check bill please wait until the staff arrived');
      } else {
        this.presentToast('Connection refuse please try again');
      }
    }, (err) => {
      this.presentToast('Connection refuse please try again');
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
