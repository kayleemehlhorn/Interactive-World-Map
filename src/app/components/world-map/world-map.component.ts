import { Component, OnInit } from '@angular/core'
import { CountryApiService } from '../../Data/country-service'

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  standalone: true,
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {
  private id: string = ''
  private title: string = ''
  countryInformation: any

  constructor (private readonly countryApiService: CountryApiService) {}

  ngOnInit (): void {
    const countryId = ''
    this.countryApiService.setCountryInformation(countryId).subscribe((countryInfo: any) => {
      // Your logic here
    })
  }

  async setWorldMapInfo (event: MouseEvent): Promise<void> {
    const svgPathElement = event.target as SVGElement

    if (svgPathElement.id !== undefined) {
      this.id = svgPathElement.id
      this.title = svgPathElement.getAttribute('title')!
      await this.getCountryInformation(this.id)
    }
  }

  private getCountryInformation (countryId: string): void {
    this.countryApiService.setCountryInformation(countryId).subscribe((countryInfo: any) => {
      console.log(countryInfo)
      this.countryInformation = countryInfo
    })
  }
}
