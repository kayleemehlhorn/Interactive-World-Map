import { Component } from '@angular/core'
import { CountryApiService, WorldBankResponseShape } from '../../Data/country-service'

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  standalone: true,
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent {
  private id: string | undefined
  private title: string | undefined
  countryInformation: WorldBankResponseShape | undefined

  constructor (private readonly countryApiService: CountryApiService) {}

  setWorldMapInfo (event: MouseEvent): void {
    const svgPathElement = event.target as SVGElement

    if (svgPathElement.id !== undefined) {
      this.id = svgPathElement.id
      this.title = svgPathElement.getAttribute('title')!
      this.setCountryInformation(this.id)
    }
  }

  private setCountryInformation (countryId: string): void {
    this.countryApiService.getCountryInfomation(countryId).subscribe((x) => {
      this.countryInformation = x
      console.log(this.countryInformation)
    })
  }
}
