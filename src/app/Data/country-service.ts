import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs'

export interface WorldBankResponseShape {
  id: string
  name: string
  capitalCity: string
  region: WorldBankInnerResponseShape
  incomeLevel: WorldBankInnerResponseShape
  latitude: number
  longitude: number
}

interface WorldBankInnerResponseShape {
  id: string
  iso2code: string
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  constructor (private readonly http: HttpClient) {}

  private callWorldBankAPI (id: string): Observable<any> {
    const apiUrl = `https://api.worldbank.org/V2/country/${id}?format=json`
    return this.http.get(apiUrl)
  }

  getCountryInfomation (id: string): Observable<WorldBankResponseShape> {
    return this.callWorldBankAPI(id).pipe(map((rawResponse) => {
      const x = rawResponse[1][0]
      const worldBankResponse: WorldBankResponseShape = {
        id: x.id,
        name: x.name,
        capitalCity: x.capitalCity,
        region: {
          id: x.region.id,
          iso2code: x.region.iso2code,
          value: x.region.value
        },
        incomeLevel: {
          id: x.incomeLevel.id,
          iso2code: x.incomeLevel.iso2code,
          value: x.incomeLevel.value
        },
        latitude: x.latitude,
        longitude: x.longitude
      }
      return worldBankResponse
    }))
  }
}
