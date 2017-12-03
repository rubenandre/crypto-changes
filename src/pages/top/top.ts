import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MoedasProvider } from '../../providers/moedas/moedas';


@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
  providers:[MoedasProvider]
})
export class TopPage {
	novoTop: any

  	constructor(public navCtrl: NavController, private moedasProvider: MoedasProvider, public loadingCtrl: LoadingController) {
  		this.obterDadosTop();
  	}

  	obterDadosTop():void {
  		let loading = this.loadingCtrl.create({
  			content: 'Obtendo Informações...'
  		});

  		loading.present()

  		this.moedasProvider.obterTop().subscribe(
  			top => {
  				this.novoTop = top
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
      this.moedasProvider.obterTop().subscribe(
        top => {
          this.novoTop = top;
      })

      setTimeout(() => {
        this.moedasProvider.obterTop().subscribe(
          top => {
            this.novoTop = top;
            refresher.complete();
          })
      }, 2000);
    }

}
