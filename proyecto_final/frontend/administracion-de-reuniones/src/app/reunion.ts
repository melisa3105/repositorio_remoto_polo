export class Reunion {
    id: number = 0;
    dia: string | null = '';
    hora: number = 8;
    duracion: number = 1;
    detalle: string | null = '';
  
    constructor(init?: Partial<Reunion>) {
      Object.assign(this, init);
    }
  }
  