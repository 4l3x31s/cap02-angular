import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  objeto: any;
  constructor() { }

  getObjeto(){
    return this.objeto;
  }
  setObjeto(objeto: any) {
    this.objeto = objeto;
  }
}
