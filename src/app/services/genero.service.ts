import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  linguagem = 'pt-BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=62aacf4dd488e46a0e69f0bbc3fbcc37';

  constructor(private http: HttpClient, private toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero> {
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.linguagem}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro())
    );
  }

  async exibirErro() {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API',
      duration: 1500,
      position: 'bottom',
      color: 'danger'
    });

    await toast.present();
    return null;
  }
}
