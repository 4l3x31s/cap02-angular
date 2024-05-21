import { Injectable } from '@angular/core';
import { PersonaDto } from '../../dto/persona.dto';
import { DireccionDto } from '../../dto/direccion.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  persona: PersonaDto = <PersonaDto>{
    nombre:'Alex',
    apellido: 'Flores',
    numeros: [1,2,3,4]
  }
  direccion: DireccionDto = {
    calle: 'Av. los olmos',
    numero: 4,
    nombre: 'jose'
  }
  constructor(private http: HttpClient) { }

  obtenerServicio(): Observable<any>{
    return this.http.get('http://localhost:3000')
  }

  getPersona(){
    return this.persona;
  }
  getDireccion(){
    return this.direccion;
  }

}
