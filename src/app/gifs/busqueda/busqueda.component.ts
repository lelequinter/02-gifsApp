import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(
    private gifSvc: GifsService
  ) { }

  buscar() {

    this.gifSvc.buscarGifs(this.txtBuscar.nativeElement.value);

    this.txtBuscar.nativeElement.value = '';

    // const input = document.querySelector('input')!.value = '';
  }
}
