import { Component } from '@angular/core'
import { WorldMapComponent } from './components/world-map/world-map.component'

@Component({
  selector: 'app-root',
  imports: [WorldMapComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-world-map'
}
