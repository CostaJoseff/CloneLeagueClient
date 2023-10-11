import { Component } from '@angular/core';
import { APIFalsaService } from '../../services/apifalsa.service';
import { Router } from '@angular/router';
import { util } from '../../../assets/ts/util';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  public nomeUsuario: string;
  public senha: string;
  public falhaNoLogin: boolean;
  public loginMantido: boolean;
  public loginDisponivel: boolean;
  public backgroundIMG: any;
  private APIFalsa: APIFalsaService;

  constructor (private router: Router) {
    this.nomeUsuario = '';
    this.senha = '';
    this.falhaNoLogin = false;
    this.loginMantido = false;
    this.loginDisponivel = false;
    this.APIFalsa = new APIFalsaService();

    this.backgroundIMG = {
      'background-image' : `url(./../../assets/wallpapers/login${util.randInt(4)}.jpg)`
    };
  }

  public manterLogin() {
    this.loginMantido = !this.loginMantido;
  }

  public liberarLogin() {
    this.loginDisponivel = this.nomeUsuario.trim() !== '' && this.senha.trim() !== '';
  }

  public logar() {
    const sucesso = this.APIFalsa.validarAcesso({});
    if (!sucesso) {
      this.falhaNoLogin = true;
      this.nomeUsuario = '';
      this.senha = '';
    }
  }

  public resetFalha() {
    this.falhaNoLogin = false;
  }
}
