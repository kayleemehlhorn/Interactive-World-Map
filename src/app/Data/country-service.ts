import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  constructor (private readonly http: HttpClient) {}

  getCountryInformation (id: string): Observable<any> {
    const apiUrl = `https://api.worldbank.org/V2/country/${id}?format=json`
    return this.http.get(apiUrl)
  }

  async setCountryInformation (id: string): Promise<void> {
    try {
      const api: string = `https://api.worldbank.org/V2/country/${id}?format=json`
      const res: Response = await fetch(api)
      const data: any = await res.json()

      const dataPath: any = data[1]
      console.log(data)

      const name: string = dataPath[0].name
      document.getElementById('name')!.innerText = name

      const capital: string = dataPath[0].capitalCity
      document.getElementById('capital')!.innerText = capital

      const region: string = dataPath[0].region.value
      document.getElementById('region')!.innerText = region

      const income: string = dataPath[0].incomeLevel.value
      document.getElementById('income')!.innerText = income

      const latitude: string = dataPath[0].latitude
      document.getElementById('latitude')!.innerText = latitude

      const longitude: string = dataPath[0].longitude
      document.getElementById('longitude')!.innerText = longitude
    } catch (error) {
      console.error('Error fetching country information:', error)
    }
  }
}
