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
}
