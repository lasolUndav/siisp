export class Persona{
  apellido: string;
  nombres: string;
  genero: string;
  numeroDocumento: string;
  fechaNacimiento: Date;
  email: string;
  constructor(apellido: string, nombres: string, genero: string, numeroDocumento: string, fechaNacimiento: Date, email: string){
    this.apellido = apellido;
    this.nombres = nombres;
    this.genero = genero;
    this.numeroDocumento = numeroDocumento;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
  }

  get Edad(): number{
    const anioDiferencial = new Date(Date.now() - this.fechaNacimiento.getTime()).getUTCFullYear();
    const anioBase = 1970;
    return Math.abs(anioDiferencial - anioBase);
  }
}

export class Titulacion{
  tipo: string;
  nombre: string;
  disciplina: string;
  constructor(tipo: string, nombre: string, disciplina: string){
   this.disciplina = disciplina;
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

export class TrabajadorUniversidad{
  persona: Persona;
  formacion: Formacion;
  constructor(persona: Persona, formacion: Formacion){
    this.persona = persona;
    this.formacion = formacion;
  }
}
