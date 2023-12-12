import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from '../app.component'
import { WorldMapComponent } from '../components/world-map/world-map.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    WorldMapComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
