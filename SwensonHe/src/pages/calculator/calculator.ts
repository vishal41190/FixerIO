import { Component } from '@angular/core';
import {ActionSheetController, NavController, NavParams} from 'ionic-angular';
import {CurrencyService} from "../../services/currencyService";

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {


  public baseCountry:string;
  public otherCountry:any = {};
  public baseAmount:any  = 0;
  public otherAmount:any = 0;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.baseCountry = "USD";

  }

  ionViewWillEnter(){

    this.baseCountry = this.navParams.data.base;
    this.otherCountry = this.navParams.data.otherCountry;

    this.baseAmount = 1.00;
    this.otherAmount = parseFloat(this.otherCountry.rate).toFixed(2);

  }


  updateOtherAmount(e){

    if(e != ""){
      this.otherAmount = (parseFloat(e)*parseFloat(this.otherCountry.rate)).toFixed(2);
    }


  }





}
