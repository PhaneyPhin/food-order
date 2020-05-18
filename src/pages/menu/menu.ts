import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MyServiceProvider } from '../../providers/my-service/my-service';
import { BuyPage } from '../buy/buy';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  relationship='1';
  type:any;
  food:any;
  drink:any;
  sweet:any;
  url:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public myservice:MyServiceProvider,public toastCtrl:ToastController) {
  }
  ionViewWillEnter() {
    console.log('ionViewDidLoad MenuPage');
    
   
    this.myservice.postData({type_id:1,store_id:this.myservice.store_id}, 'getFoods').subscribe((result) => {
      let a: any;
      a = result;
      a = JSON.parse(a._body);
      this.food = a;
    },(error)=>{
      this.presentToast('Connection error please try again');
    })
    this.myservice.postData({type_id:2,store_id:this.myservice.store_id}, 'getFoods').subscribe((result) => {
      let a: any;
      a = result;
      a = JSON.parse(a._body);
      this.drink = a;
    },(error)=>{
      this.presentToast('Connection error please try again');
    });
    this.myservice.postData({type_id:3,store_id:this.myservice.store_id}, 'getFoods').subscribe((result) => {
      let a: any;
      a = result;
      a = JSON.parse(a._body);
      this.sweet = a;
    },(error)=>{
      this.presentToast('Connection error please try again');
    });
    this.url=this.myservice.apiUrl;
    console.log(this.sweet);
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
  //  console.log(item);
    this.navCtrl.push(BuyPage,{
      item:item
    })
  }

}
