import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MoedasProvider } from '../../providers/moedas/moedas';

@Component({
  	selector: 'page-outras',
  	templateUrl: 'outras.html',
    providers:[MoedasProvider]
})
export class OutrasPage {
	novoOutras: any
  	constructor(public navCtrl: NavController, private moedasProvider: MoedasProvider, public loadingCtrl: LoadingController) {
  		this.obterDadosOutras();
  	}

  	obterDadosOutras():void{
  		let loading = this.loadingCtrl.create({
  			content: 'Obtendo Informações...'
  		});

  		loading.present()

  		this.moedasProvider.obterRestantes().subscribe(
  			outras => {
  				this.novoOutras = outras
  			},
  			err => {
  				console.error("Erro: " + err);
  			},
  			() => {
  				loading.dismiss();
  				console.log("Informações obtidas com sucesso");
  			});
  	}

    doRefresh(refresher){
      this.moedasProvider.obterRestantes().subscribe(
        outras => {
          this.novoOutras = outras;
      })

      setTimeout(() => {
        this.moedasProvider.obterRestantes().subscribe(
          outras => {
            this.novoOutras = outras;
            refresher.complete();
          })
      }, 2000);
    }

}
