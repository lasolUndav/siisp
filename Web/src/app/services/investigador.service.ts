import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CargoDocente, Formacion, Investigacion, Persona, TrabajadorUniversidad } from './../models/trabajadorUniversidad';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestigadorService {

  private investigadoresDB: AngularFireList<object>;
  constructor(private db: AngularFireDatabase) {
    this.investigadoresDB = db.list('/trabajadorUniveristario', (ref) => ref.orderByChild('apellido'));
  }

  agregarNuevo(investigador: TrabajadorUniversidad){
    return this.investigadoresDB.push(this.convertirAModeloDatos(investigador));
  }

  private convertirAModeloDatos(investigador: TrabajadorUniversidad): object{
    let modeloDatos = {};
    modeloDatos["apellido"] = investigador.persona.apellido;
    modeloDatos["nombres"] = investigador.persona.nombres;
    modeloDatos["email"] = investigador.persona.email;
    modeloDatos["genero"] = investigador.persona.genero;
    modeloDatos["numeroDocumento"] = investigador.persona.numeroDocumento;
    if (investigador.persona.fechaNacimiento !== "") {
      modeloDatos["fechaNacimiento"] = new Date(investigador.persona.fechaNacimiento).getTime() / 1000.0;
    }
    modeloDatos["disciplinaFormacion"] = investigador.formacion.disciplina;
    modeloDatos["areaFormacion"] = investigador.formacion.area;
    modeloDatos["titulos"] = investigador.formacion.titulos;
    modeloDatos["cargosDocentes"] = investigador.cargosDocentes;
    modeloDatos["observaciones"] = investigador.observaciones;

    return modeloDatos;
  }
}
