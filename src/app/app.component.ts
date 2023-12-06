import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WorldMapComponent } from './components/world-map/world-map.component'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, WorldMapComponent]
})
export class AppComponent {
  title = 'world-map'
}
