export class Persona{
  apellido: string;
  nombres: string;
  genero: string;
  numeroDocumento: string;
  fechaNacimiento: string;
  email: string;
  constructor(apellido: string, nombres: string, genero: string, numeroDocumento: string, fechaNacimiento: string, email: string){
    this.apellido = apellido;
    this.nombres = nombres;
    this.genero = genero;
    this.numeroDocumento = numeroDocumento;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
  }

  get Edad(): number{
    const anioDiferencial = new Date(Date.now() - new Date(this.fechaNacimiento).getTime()).getUTCFullYear();
    const anioBase = 1970;
    return Math.abs(anioDiferencial - anioBase);
  }
}

export class Titulacion{
  tipo: string;
  nombre: string;
  disciplina: string;
  constructor(tipo: string, nombre: string, disciplina: string){
   this.tipo = tipo;
   this.nombre = nombre;
   this.disciplina = disciplina;
  }
}

export class Formacion{
  area: string;
  disciplina: string;
  titulos: Array<Titulacion>;
  constructor(area: string, disciplina: string, titulos: Array<Titulacion>){
    this.area = area;
    this.disciplina = disciplina;
    this.titulos = titulos;
  }
}

export class Beca{
  tipo: string;
  organismoOtorgante: string;
  carreraDesarrollada: string;
  fechaIniciacion: string;
  fechaFinalizacion: string;
  constructor(tipo: string, organismoOtorgante: string, carreraDesarrollada: string, fechaIniciacion: string, fechaFinalizacion: string){
    this.tipo = tipo;
    this.organismoOtorgante = organismoOtorgante;
    this.carreraDesarrollada = carreraDesarrollada;
    this.fechaIniciacion = fechaIniciacion;
    this.fechaFinalizacion = fechaFinalizacion;
  }
}

export class Investigacion{
  disciplina: string;
  areaAplicacion: string;
  organismoCategorizacion: string;
  categoria: string;
  becas: Array<Beca>;
  constructor(disciplina: string, areaAplicacion: string, organismoCategorizacion: string, categoria: string, becas: Array<Beca>){
    this.disciplina = disciplina;
    this.areaAplicacion = areaAplicacion;
    this.organismoCategorizacion = organismoCategorizacion;
    this.categoria = categoria;
    this.becas = becas;
  }
}

export class CargoDocente{
  tipo: string;
  dedicacion: string;
  radicacion: string;
  tipoContratacion: string;
  constructor(tipo: string, dedicacion: string, radicacion: string, tipoContratacion: string){
    this.tipo = tipo;
    this.dedicacion = dedicacion;
    this.radicacion = radicacion;
    this.tipoContratacion = tipoContratacion;
  }
}

export class TrabajadorUniversidad{
  persona: Persona;
  formacion: Formacion;
  investigacion: Investigacion;
  cargosDocentes: Array<CargoDocente>;
  observaciones: string;
  constructor(persona: Persona, formacion: Formacion, investigacion: Investigacion,
              cargosDocentes: Array<CargoDocente>, observaciones: string){
    this.persona = persona;
    this.formacion = formacion;
    this.investigacion = investigacion;
    this.cargosDocentes = cargosDocentes;
    this.observaciones = observaciones;
  }
}
