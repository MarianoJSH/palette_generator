import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PaletteComponent } from '../components/palette/palette.component';
import { AppComponent } from '../app.component';
import { ColormindService } from '../services/colormind.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppComponent,
    PaletteComponent
  ],
  providers: [
    ColormindService
  ],
  bootstrap: []
})
export class AppModule { }