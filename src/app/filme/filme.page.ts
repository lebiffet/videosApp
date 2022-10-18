import { Component, OnInit } from '@angular/core';
import { IFilmeAPI } from '../models/IFilmeAPI.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
})
export class FilmePage implements OnInit {

  filme: IFilmeAPI;
  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    this.generos = this.dadosService.pegarDados('generos');
  }

}
