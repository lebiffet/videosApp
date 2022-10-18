import { Component, OnInit } from '@angular/core';
import { IFilme } from '../models/IFilme.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
})
export class FilmePage implements OnInit {

  filme: IFilme;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
  }

}
