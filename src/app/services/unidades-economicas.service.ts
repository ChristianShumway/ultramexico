import { Injectable } from '@angular/core';
import { Unidad } from './../interfaces/unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadesEconomicasService {
  unidades: Unidad[];
  constructor() {
    const presumiendoMexico: Unidad = {
      uid: '1',
      nombreUnidad: 'Presumiendo México',
      facebook: '',
      twitter: '',
      urlWeb: 'http://www.presumiendomexico.com.mx/',
      imagen: './../../assets/logos/unidades/presumiendomexico.png'
    };
    const urbanismoPositivo: Unidad = {
      uid: '2',
      nombreUnidad: 'Urbanismo Positivo',
      facebook: '',
      twitter: '',
      urlWeb: 'http://urbanismopositivo.com/',
      imagen: './../../assets/logos/unidades/urbanismopositivo.png'
    };
    const telemetrika: Unidad = {
      uid: '3',
      nombreUnidad: 'Telemetrika',
      facebook: '',
      twitter: '',
      urlWeb: 'http://telemetrika.com.mx/content-management/',
      imagen: './../../assets/logos/unidades/telemetrika.png'
    };
    const ultraAcoustics: Unidad = {
      uid: '4',
      nombreUnidad: 'Ultra Acoustics',
      facebook: '',
      twitter: '',
      urlWeb: 'http://uacoustics.com.mx/',
      imagen: './../../assets/logos/unidades/ultraacoustics.png'
    };
    const radioRanchito: Unidad = {
      uid: '5',
      nombreUnidad: 'Radio Ranchito',
      facebook: '',
      twitter: '',
      urlWeb: 'http://radioranchito.com.mx/',
      imagen: './../../assets/logos/unidades/radioranchito.png'
    };
    const aguilaMaya: Unidad = {
      uid: '6',
      nombreUnidad: 'Aguila Maya',
      facebook: '',
      twitter: '',
      urlWeb: 'http://aguilamaya.com/',
      imagen: './../../assets/logos/unidades/aguilamaya.png'
    };
    const ultraNoticias: Unidad = {
      uid: '7',
      nombreUnidad: 'Ultra Noticias',
      facebook: '',
      twitter: '',
      urlWeb: 'http://www.ultranoticias.com.mx/',
      imagen: './../../assets/logos/unidades/ultranoticias.png'
    };
    const purifika: Unidad = {
      uid: '8',
      nombreUnidad: 'Purifika',
      facebook: '',
      twitter: '',
      urlWeb: '#',
      imagen: './../../assets/logos/unidades/purifika.png'
    };

    this.unidades = [presumiendoMexico, urbanismoPositivo, telemetrika, ultraAcoustics, radioRanchito, aguilaMaya, ultraNoticias, purifika];
   }

   getUnidades() {
     return this.unidades;
   }
}
