import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaletteComponent } from "./components/palette/palette.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaletteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'color-palette-generator';
}
