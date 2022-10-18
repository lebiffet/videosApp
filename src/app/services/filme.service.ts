import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaFilmes } from '../models/IFilmeAPI.model';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  linguagem = 'pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=62aacf4dd488e46a0e69f0bbc3fbcc37';

  constructor(private http: HttpClient, private toastController: ToastController) { }

  buscarFilmes(busca: string): Observable<IListaFilmes> {
    const url = `${this.apiURL}search/movie${this.key}&language=${this.linguagem}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url).pipe(
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
