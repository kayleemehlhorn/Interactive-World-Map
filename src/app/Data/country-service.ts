import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  constructor (private http: HttpClient) { }

  getCountryInformation (countryId: string): Observable<any> {
    const apiUrl = `https://api.worldbank.org/V2/country/'+svgCountry.id+'?format=json`
    return this.http.get(apiUrl)
  }
}
