import { Component } from '@angular/core'

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  onHover (): void {
    throw new Error('Method not implemented.')
  }

  id: string = ''
  title: string = ''
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  setWorldMapInfo (event: any): void {
    this.id = event.target.id
    this.title = event.target.getAttribute('title')

    console.log('ID', this.id)
    console.log('Title', this.title)
  }
}
