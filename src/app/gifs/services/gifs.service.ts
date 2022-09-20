import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'WmRLshdXp34hRaOOxDGJxrkzd81qcTDT';
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient){}

  buscarGifs(query: string = '') {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    // console.log(this._historial);
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=WmRLshdXp34hRaOOxDGJxrkzd81qcTDT&q=lilo&limit=10')
    //   .then(resp => {
    //     resp.json().then(data => console.log(data))
    //   })

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=WmRLshdXp34hRaOOxDGJxrkzd81qcTDT&q=lilo&limit=10`)
    .subscribe( (resp: any) => {
      console.log(resp.data);

    } )
  }

}


