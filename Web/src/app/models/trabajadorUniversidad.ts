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

export class TrabajadorUniversidad{
  persona: Persona;
  constructor(persona: Persona){
    this.persona = persona;
  }
}
