import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MoedasProvider {

	constructor(public http: Http) {
	}

	/*
		Método obterTop():

		Este método obtém o top 10 de moedas da Api (limit=10)

		Neste método também prezamos que seja obtido a cotação da respetiva moeda em euros (convert=EUR)
	*/
	obterTop(){
  		return this.http.get('https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10').map(res => res.json());
	}

	/* 
		Método obterRestantes:

		Este método obtém todas as moedas da Api excluindo as que ja estão presentes no top 10

		Neste método também prezamos que seja obtido a cotação da respetiva moeda em euros (convert=EUR)
	*/
	obterRestantes(){
		return this.http.get('https://api.coinmarketcap.com/v1/ticker/?start=10&convert=EUR').map(res => res.json());
	}


}
