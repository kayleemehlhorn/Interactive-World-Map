import { Injectable } from '@angular/core'
import type { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor (private readonly http: HttpClient) {
    this.fetchWorldInfo()
  }

  fetchWorldInfo (): void {
    // Implement your HTTP request logic here using this.http
    // For example:
    // this.http.get('your-api-endpoint').subscribe(data => console.log(data));
  }
}
