import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaDto } from './dto/persona.dto';
import { DireccionDto } from './dto/direccion.dto';
import { FuncionarioDto } from './dto/funcionario.dto';
import { PruebaComponent } from './pages/persona/prueba/prueba.component';
import { PruebaService } from './service/api/prueba.service';

@Component({
  selector: 'ruat-root',
  standalone: true,
  imports: [RouterOutlet, PruebaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cap2';

}
