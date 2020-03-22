import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  arrPersonas: Array<any> = [] as Array<JSON>;
  constructor() { }
  guardar(persona) {
    this.arrPersonas.push(persona);
    console.log(persona);
    console.log(this.arrPersonas);
  }
  delete(item) {
    let i = this.arrPersonas.indexOf(item);
    this.arrPersonas.splice(i, 1);
  }
  getArr(){
    return this.arrPersonas;
  }
}
