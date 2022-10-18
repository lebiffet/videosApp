import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  login() {
    if (this.email === 'admin@admin.com' && this.senha === 'admin') {
      this.apresentarToast('Seja bem vindo', 'success');
      this.router.navigateByUrl('/tabs/tab1');
    } else {
      this.apresentarToast('Usuário ou senha inválidos', 'danger');
    }
  }

  async apresentarToast(mensagem: string, cor: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
      position: 'bottom',
      color: cor
    });

    await toast.present();
  }
}
