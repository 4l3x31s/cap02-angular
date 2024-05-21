import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { LocalDataService } from '../../../service/utils/local-data.service';

@Component({
  selector: 'ruat-detalle-deuda',
  standalone: true,
  imports: [],
  templateUrl: './detalle-deuda.component.html',
  styleUrl: './detalle-deuda.component.scss'
})
export class DetalleDeudaComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.localData.getObjeto())
  }
  localData = inject(LocalDataService)

  @Input()
  nombre: string = '';
  @Output()
  salida: EventEmitter<any> = new EventEmitter;
  sacarValor() {
    this.salida.emit('Mi resultao hijo')
  }
}
