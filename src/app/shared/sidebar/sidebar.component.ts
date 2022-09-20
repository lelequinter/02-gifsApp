import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial(){
    return this.gifSvc.historial;
  }

  constructor(
    public gifSvc: GifsService
  ) { }

  buscar(termino: string){
    this.gifSvc.buscarGifs(termino)
  }
}
