import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'WmRLshdXp34hRaOOxDGJxrkzd81qcTDT';
  private _historial: string[] = [];

  //Todo Cambiar any por su tipo correspondiente
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
   this._historial =  JSON.parse(localStorage.getItem('historial')!) || [] ;
   this.resultados =  JSON.parse(localStorage.getItem('resultados')!) || [] ;
  // if( localStorage.getItem('historial') ){
  //   this._historial =  JSON.parse( localStorage.getItem('historial') || '' );
  //}
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify( this._historial ));

    }
    // console.log(this._historial);
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=WmRLshdXp34hRaOOxDGJxrkzd81qcTDT&q=lilo&limit=10')
    //   .then(resp => {
    //     resp.json().then(data => console.log(data))
    //   })

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=WmRLshdXp34hRaOOxDGJxrkzd81qcTDT&q=${query}&limit=10`)
      .subscribe((resp) => {
        // console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify( this.resultados ));
      })
  }

}


