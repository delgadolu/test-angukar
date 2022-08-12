import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public elementoSeleccionado: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
