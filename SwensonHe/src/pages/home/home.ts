import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CurrencyService} from "../../services/currencyService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public countries:any[] = [];
  public listOfCountries:any[] = [];
  public baseCountry:string;
  constructor(public navCtrl: NavController,private currencyService:CurrencyService) {
    this.baseCountry = "USD";
  }

  ionViewWillEnter(){

    this.listOfCountries = this.currencyService.getCountryList();

    this.currencyService.getLatest(this.baseCountry).subscribe(response =>{

      console.log(response);
      this.countries = response;
    },error=>{
      console.log("error");
    })

  }

}
