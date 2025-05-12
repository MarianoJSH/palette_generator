import { Component, HostListener, OnInit } from '@angular/core';
import { ColormindService } from '../../services/colormind.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-palette',
  imports: [NgFor, NgIf],
  templateUrl: './palette.component.html',
  styleUrl: './palette.component.css'
})
export class PaletteComponent implements OnInit {
  colors: string[] = [];
  notification = '';

  constructor(private colormindService: ColormindService) {}

  //FUNCIÓN QUE SE EJECUTA AL INICIAR EL COMPONENTE
  ngOnInit(): void {
      this.generatePalette();
  }

  //ESTA FUNCIÓN SE EJECUTA AL HACER CLICK EN EL BOTÓN DE GENERAR PALETA
  generatePalette() {
    this.colormindService.getPalette().subscribe(response => {
      this.colors = response.result.map((rgb: number[]) => this.rgbtoHex(rgb));
    });
  }

  rgbtoHex(rgb: number[]): string {
    return '#' + rgb.map(x => x.toString(16).padStart(2, '0')).join('');
  }

  copyColor(color: string) {
    navigator.clipboard.writeText(color);
    this.showNotification(`Color copiado ${color}`);
  }

  copyAllColors() {
    navigator.clipboard.writeText(this.colors.join(', '));
    this.showNotification('Copiada toda la paleta de colores');
  }

  showNotification(message: string) {
    this.notification = message;
    setTimeout(() => {
      this.notification = '';
    }, 3000); // AÑADIMOS 3S DE ESPERA PARA QUE SE LEA EL MENSAJE
  }

  //AQUÍ RECOGEMOS LA TECLA ESPACIO Y LA TECHA C PARA QUE EL USUARIO COPIE LA PALETA
  //GENERE COLORES NUEVOS
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space') {
      event.preventDefault();
      this.generatePalette();
    }

    if (event.code === 'c') {
      event.preventDefault();
      this.copyAllColors();
    }
  }
}
