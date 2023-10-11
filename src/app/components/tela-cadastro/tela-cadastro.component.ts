import { Component } from '@angular/core';
import { util } from '../../../assets/ts/util';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent {

  public backgroundIMG: any;
  public nickName: string;
  public nomeDeAcesso: string;
  public email: string;
  public senha: string;
  public cadastroDisponivel: boolean;

  constructor(){
    this.backgroundIMG = {
      'background-image' : `url(./../../assets/wallpapers/cadastro${util.randInt(3)}.jpg)`
    };
    this.nickName = '';
    this.nomeDeAcesso = '';
    this.email = '';
    this.senha = '';
    this.cadastroDisponivel = false;
  }

  public liberarCadastro() {
    this.cadastroDisponivel = this.nickName.trim() !== '' && this.nomeDeAcesso.trim() !== '' && this.email.trim() !== '' && this.senha.trim() !== '';
  }
}
