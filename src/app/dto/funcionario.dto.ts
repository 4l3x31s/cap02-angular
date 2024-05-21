import { DireccionDto } from "./direccion.dto";
import { PersonaDto } from "./persona.dto";

export interface FuncionarioDto {
  persona: PersonaDto;
  direccion: DireccionDto;
}
