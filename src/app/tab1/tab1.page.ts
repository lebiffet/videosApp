import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaVideos: IFilme[] = [
    {
      nome: 'Morbius (2022)',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
      duracao: '1h 45m',
      lancamento: '31/03/2022 (BR)',
      avaliacao: 63,
      generos: ['Ação', 'Ficção científica', 'Fantasia']
    },
    {
      nome: 'DC Liga dos Superpets (2022)',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sQN9v8dIkEYtrGhLULweNNKONHg.jpg',
      duracao: '1h 45m',
      lancamento: '28/07/2022 (BR)',
      avaliacao: 75,
      generos: ['Animação', 'Ação', 'Família', 'Comédia', 'Ficção científica']
    },
    {
      nome: 'Homem-Aranha: Sem Volta Para Casa (2021)',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      duracao: '2h 29m',
      lancamento: '16/12/2021 (BR)',
      avaliacao: 80,
      generos: ['Ação', 'Aventura', 'Ficção científica']
    }
  ];

  constructor(private alertController: AlertController, private toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Deseja mesmo favoritar esse filme?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 1500,
      position: 'bottom',
      color: 'success'
    });

    await toast.present();
  }
}
