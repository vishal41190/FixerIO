import { Component } from '@angular/core';
import {ActionSheetController, NavController} from 'ionic-angular';
import {CurrencyService} from "../../services/currencyService";
import {CalculatorPage} from "../calculator/calculator";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public countries:any[] = [];
  public listOfCountries:any[] = [];
  public baseCountry:string;
  constructor(public navCtrl: NavController,
              private currencyService:CurrencyService,
              public actionSheetCtrl: ActionSheetController,
              public nav: NavController) {
    this.baseCountry = "USD";
  }

  ionViewWillEnter(){

    this.listOfCountries = this.currencyService.getCountryList();

    this.currencyService.getLatest(this.baseCountry).subscribe(response =>{

      this.countries = response;
    },error=>{
      console.log("error");
    })

  }

  changeBaseCountry(){
      let button = [];

      let countryList = this.currencyService.getCountryList();
      for(let i=0 ; i<countryList.length ;i++){
        button.push({text:countryList[i],handler:()=>{this.changeBase(countryList[i]);}});
      }

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select base county',
      buttons: button
    });
    actionSheet.present();

  }


  changeBase(country:string){

    this.baseCountry = country;

    this.currencyService.getLatest(this.baseCountry).subscribe(response =>{

      this.countries = response;
    },error=>{
      console.log("error");
    })

  }

  goToTheCalculator(country:any){

    this.nav.push(CalculatorPage,{base:this.baseCountry,otherCountry:country});
  }


}
