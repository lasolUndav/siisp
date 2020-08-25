import { Beca, CargoDocente, Formacion, Investigacion, Persona, Titulacion, TrabajadorUniversidad } from '../models/trabajadorUniversidad';
import { Component, OnInit } from '@angular/core';

import { InvestigadorService } from './../services/investigador.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-formulario-investigador',
  templateUrl: './formulario-investigador.component.html',
  styleUrls: ['./formulario-investigador.component.css']
})
export class FormularioInvestigadorComponent implements OnInit {

  private investigadorService: InvestigadorService;
  public investigador: TrabajadorUniversidad;

  constructor(investigadorService: InvestigadorService) {
    this.investigadorService = investigadorService;
    this.investigador = null;
  }

  ngOnInit(): void {
    this.setupParaNuevoInvestigador();
  }

  guardar(): void{
    this.investigadorService.agregarNuevo(this.investigador);
  }

  agregarTitulo(tipo, tituloGrado, disciplinaTituloGrado): void{
    let titulo = new Titulacion(tipo, tituloGrado, disciplinaTituloGrado);
    this.investigador.formacion.titulos.push(titulo);
  }

  quitarTitulo(indice): void{
    if (indice >= 0 && indice < this.investigador.formacion.titulos.length){
      this.investigador.formacion.titulos.splice(indice, 1);
    }
  }

  quitarBeca(indice): void{
    if (indice >= 0 && indice < this.investigador.investigacion.becas.length){
      this.investigador.investigacion.becas.splice(indice, 1);
    }
  }

  agregarBeca(tipo, organismoOtorgante, carreraDesarrollada, incio, fin): void{
    let beca = new Beca(tipo, organismoOtorgante, carreraDesarrollada, incio, fin);
    this.investigador.investigacion.becas.push(beca);
  }

  quitarCargo(indice): void{
    if (indice >= 0 && indice < this.investigador.cargosDocentes.length){
      this.investigador.cargosDocentes.splice(indice, 1);
    }
  }

  agregarCargo(tipo, dedicacion, radicacion, tipoContratacion): void{
    let cargo = new CargoDocente(tipo, dedicacion, radicacion, tipoContratacion);
    this.investigador.cargosDocentes.push(cargo);
  }

  private setupParaNuevoInvestigador(): void{
    this.investigador = new TrabajadorUniversidad(new Persona("", "", "", "", "", ""),
    new Formacion("", "", new Array<Titulacion>()),
    new Investigacion("", "", "", "", new Array<Beca>()),
    new Array<CargoDocente>(), "");
  }
}
