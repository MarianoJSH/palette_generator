import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ColormindService {
  private apiUrl = 'http://paletacolores.marianosuarez.es:3000/get-palette'; // ESTA LÍNEA CAMBIALA SI VAS A TRABAJAR EN LOCAL O SUBIR A PRODUCCIÓN

  constructor(private http: HttpClient) {
    console.log('Colormind iniciado');
  }

  //HACER LA LLAMADA A LA API, NO HAY QUE ESTABLECER UN CONTENT-TYPE EN EL HEADER DADO
  //QUE LA API ES UN HTTP Y NO HTTPS, DANDO ERRO DE CORS 
  getPalette(): Observable<any> {
    const body = { "model": "default" };
    return this.http.post<any>(
      this.apiUrl,
      body
    );
  }
}