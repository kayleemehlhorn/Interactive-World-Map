import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  constructor (private readonly http: HttpClient) {}

  getCountryInformation (id: string): Observable<any> {
    const apiUrl = `https://api.worldbank.org/V2/country/${id}?format=json`
    return this.http.get(apiUrl)
  }

  setCountryInformation (id: string): Observable<any> {
    const subject = new Subject()

    this.getCountryInformation(id).subscribe((data: any) => {
      const countryInfo = {
        name: data[1][0].name,
        capital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        incomeLevel: data[1][0].incomeLevel.value,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      }
      subject.next(countryInfo)
    })

    return subject.asObservable()
  }
}
