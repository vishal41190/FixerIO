
import {Injectable} from "@angular/core";
import {Http, RequestOptions,Headers,Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
@Injectable()
export class CurrencyService {

  api_url: any;

  countryList:any[];

  constructor( private http: Http) {
    this.api_url= "http://api.fixer.io/";
    this.countryList = ["USD","AUD","IDR","CAD","CHF","CNY","EUR","GBP","INR",];
  }

  getCountryList(){
    return this.countryList;
  }

  getLatest(baseCounty:string): Observable<any> {

    let headers    = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options    = new RequestOptions({headers: headers}); // Create a request option

    return this.http.get(this.api_url + 'latest?base='+baseCounty, options) // ...using post request
      .map( (res: Response) =>{
        let body = res.json();
        let response = [];
        for(let i=0; i<this.countryList.length;i++){
          if(this.countryList[i] != baseCounty){
            response.push({country:this.countryList[i],rate: body.rates[this.countryList[i]]});
          }


        }
        return response || [];
      })
      .catch(this.handleError);
  }


  public filterCountries(fixerResponse:any):any{






  }


  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err  = body.error || JSON.stringify(body);
      errMsg     = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
