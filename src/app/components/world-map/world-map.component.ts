import { Component, OnInit } from '@angular/core'
import { CountryApiService } from '../../Data/country-service'

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {
  private id: string = ''
  private title: string = ''

  constructor (private readonly countryApiService: CountryApiService) {}

  ngOnInit (): void {
    // Initialization logic if needed
  }

  async setWorldMapInfo (event: MouseEvent): Promise<void> {
    const svgPathElement = event.target as SVGElement

    if (svgPathElement.id !== undefined) {
      this.id = svgPathElement.id
      this.title = svgPathElement.getAttribute('title')!
      await this.getCountryInformation(this.id)
    }
  }

  async getCountryInformation (id: string): Promise<void> {
    try {
      const countryData = await this.countryApiService.getCountryInformation(id).toPromise()

      console.log(countryData)

      const name: string = countryData[1][0].name
      document.getElementById('name')!.innerText = name
      // Repeat similar steps for other properties
    } catch (error) {
      console.error('Error fetching country information', error)
    }
  }
}
