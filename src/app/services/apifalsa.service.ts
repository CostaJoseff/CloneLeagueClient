import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIFalsaService {

  private contas: any[];
  private loginMantido: any;

  constructor() {
    let temp = localStorage.getItem("contas");
    if (temp === null) {
      this.contas = [];
    } else {
      this.contas = JSON.parse(temp);
    }

    temp = localStorage.getItem("loginMantido");
    if (temp === null) {
      this.loginMantido = {};
    } else {
      this.loginMantido = JSON.parse(temp);
    }
  }

  public validarAcesso(dadosDeAcesso: any) {
    const contaEncontrada = this.contas.find((conta) => {
      return conta.nomeUsuario === dadosDeAcesso.nomeUsuario && conta.senha === dadosDeAcesso.senha;
    });
    return !!contaEncontrada;
  }
}
