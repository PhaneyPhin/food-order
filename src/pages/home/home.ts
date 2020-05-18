import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { MyServiceProvider } from '../../providers/my-service/my-service';
import { BuiltinType } from '../../../node_modules/@angular/compiler/src/output/output_ast';
import { BuyPage } from '../buy/buy';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  header: any;
  favorite: any;
  url: any;
  constructor(public navCtrl: NavController, public myservice: MyServiceProvider, public toastCtrl: ToastController) {
    
  }
  ionViewWillEnter() {
    
    this.url = this.myservice.apiUrl;
    console.log(this.myservice.store_id);
      var data = { store_id: this.myservice.store_id };
      //alert(data.store_id);
      this.myservice.postData(data, 'getStoreName').subscribe((result) => {
        let a: any;
        a = result;
        a = JSON.parse(a._body);
        this.header = a[0].store_name;
      }, (err) => {
        this.presentToast('connection error please try angain');
      })
      this.myservice.postData(data, 'getFavorite').subscribe((result) => {
        let a: any;
        a = result;
        a = JSON.parse(a._body);
        this.favorite = a;
      }, (error) => {
        this.presentToast('connection error please try angain');
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

  buy(item) {
    console.log(item);
    this.navCtrl.push(BuyPage, {
      item: item
    })
  }

}
