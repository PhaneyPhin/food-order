import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { MyServiceProvider } from '../../providers/my-service/my-service';


/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {
  item: any;
  url: any;
  num = 0;
  total = 0;
  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams, public myservice: MyServiceProvider) {
    this.item = navParams.get('item')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
    this.url = this.myservice.apiUrl;
  }
  add() {
    this.num++;
    this.total += this.item.price;
  }
  remove() {
    if (this.num > 0) {
      this.num--;
      this.total -= this.item.price;
    }
  }
  buy() {
    if (this.num > 0) {
      var data = { table_id: this.myservice.table, food_id: this.item.food_id, num: this.num };
      this.myservice.postData(data, "buy").subscribe((data) => {
        let a: any;
        a = data;
        a = JSON.parse(a._body);
        if (a.status == "success") {
          this.presentToast('Your order was successfull');
          this.navCtrl.pop();
        }
      },(err)=>{
        this.presentToast('connection error please try again');
      })
    }
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
