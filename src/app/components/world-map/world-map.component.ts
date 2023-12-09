import { Component } from '@angular/core'

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent {
  private id: string = ''
  private title: string = ''
  setWorldMapInfo (event: MouseEvent): void {
    const svgPathElement = event.target as SVGElement
    this.id = svgPathElement.id
    this.title = svgPathElement.getAttribute('title')!

    console.log({ id: this.id, title: this.title })
  }

  async getCountry (svgCountry: SVGPathElement) {
    const api: string = `https://api.worldbank.org/V2/country/'+svgCountry.id+'?format=json`
    const res: Response = await fetch(api)
    const data: any = await res.json()
    const dataPath: any = data[1]
    console.log(dataPath[0])

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
  }
}
