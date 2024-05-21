import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonaDto } from '../../../dto/persona.dto';
import { DireccionDto } from '../../../dto/direccion.dto';
import { PruebaService } from '../../../service/api/prueba.service';
import { FuncionarioDto } from '../../../dto/funcionario.dto';
import { lastValueFrom } from 'rxjs';
import { LocalDataService } from '../../../service/utils/local-data.service';
import { Router } from '@angular/router';
import { DetalleDeudaComponent } from '../detalle-deuda/detalle-deuda.component';

@Component({
  selector: 'ruat-prueba',
  standalone: true,
  imports: [CommonModule, FormsModule, AsyncPipe, JsonPipe, DetalleDeudaComponent],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent implements OnInit, AfterViewInit, OnDestroy {
  titulo: string = 'Prueba'
  items = [
    1,2,3,4,5,6
  ]
  muestradata= true
  persona: PersonaDto = <PersonaDto>{};
  direccion: DireccionDto = <DireccionDto>{}

  personaServicio: any;
  pruebaService = inject(PruebaService)
  dataService = inject(LocalDataService);
  constructor(private router: Router) {
    this.miFuncion()
    console.log('1');

  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    console.log('3');
  }
  recibeDatos(event: any) {
    window.alert(event)
  }
  async ngOnInit() {
    //throw new Error('Method not implemented.');
    console.log('2');
    this.consumirServicio();
    let valor = await this.consumoPorPromise();
    console.log(valor)
    this.dataService.setObjeto(valor);
    //this.router.navigateByUrl('test')
  }
  consumirServicio() {
    this.personaServicio = this.pruebaService.obtenerServicio();
  }
  async consumoPorPromise() {
    let miValor = await lastValueFrom(this.pruebaService.obtenerServicio())
    console.log(miValor);
    return miValor;
  }
  pruebaBoton() {
    window.alert('TEst')
  }
  miFuncion() {
    this.persona = this.pruebaService.getPersona();
    this.direccion =  this.pruebaService.getDireccion();
    //let miVariable = {...this.persona,...this.direccion, telefono:'1231231'}
    this.persona.nombre = 'Juan'
    this.persona.numeros[1] = 10;
    //console.log(miVariable)
    let mivariable2:FuncionarioDto = {
      persona: this.persona,
      direccion: this.direccion
    }
    console.log(mivariable2)
  }
}
