import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/Produto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public listaProdutos: Produto[] = [];

  constructor(private prodService: ProdutoService, private AlertController: AlertController) {}

  ngOnInit() {
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.prodService.buscarProdutos().subscribe(dadosRetorno => {
      this.listaProdutos = dadosRetorno.map((registro:any) =>(
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          valor: registro.payload.doc.data()['valor']
        }
      ));
    });
  }

  async deletarProdutos(id: string) {
    const alert = await this.AlertController.create({
      header: 'Confirma exclusão deste produto?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.prodService.deletar(id);
          },
        },
      ],
    });
    await alert.present();
    this.buscarProdutos();
  }
}
