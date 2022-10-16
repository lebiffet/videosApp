import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Deseja mesmo favoritar esse filme?',
      buttons: ['Cancelar', 'Confirmar'],
    });

    await alert.present();
  }
}
