webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sobre_sobre__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outras_outras__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__top_top__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__top_top__["a" /* TopPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__outras_outras__["a" /* OutrasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__sobre_sobre__["a" /* SobrePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ruben/crypto-changes/src/pages/tabs/tabs.html"*/'<ion-tabs color="redbrown">\n  <ion-tab [root]="tab1Root" tabTitle="Top 10" tabIcon="logo-bitcoin"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="+ Moedas" tabIcon="ios-cash-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Sobre" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"/home/ruben/crypto-changes/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SobrePage = (function () {
    function SobrePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"/home/ruben/crypto-changes/src/pages/sobre/sobre.html"*/'<ion-header>\n  <ion-navbar color="oliv">\n    <ion-title>\n      Sobre\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div id="img">\n		<img src="https://avatars1.githubusercontent.com/u/9402773?s=460&v=4">\n	</div>\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        Sobre Aplicação\n      </ion-list-header>\n      <ion-item>Nome: Crypto Changes</ion-item>\n      <ion-item>Versão: 1.0.0</ion-item>\n      <ion-item>Última Atualização: 03/12/2017</ion-item>\n      <ion-list-header>\n        Desenvolvedor\n      </ion-list-header>\n      <ion-item>Rúben Silva</ion-item>\n      <ion-item>\n        <ion-icon name="logo-github" item-start></ion-icon>\n        <a href="https://github.com/rubenandre">Github</a>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-content>'/*ion-inline-end:"/home/ruben/crypto-changes/src/pages/sobre/sobre.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutrasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_moedas_moedas__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutrasPage = (function () {
    function OutrasPage(navCtrl, moedasProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.moedasProvider = moedasProvider;
        this.loadingCtrl = loadingCtrl;
        this.obterDadosOutras();
    }
    OutrasPage.prototype.obterDadosOutras = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Obtendo Informações...'
        });
        loading.present();
        this.moedasProvider.obterRestantes().subscribe(function (outras) {
            _this.novoOutras = outras;
        }, function (err) {
            console.error("Erro: " + err);
        }, function () {
            loading.dismiss();
            console.log("Informações obtidas com sucesso");
        });
    };
    OutrasPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.moedasProvider.obterRestantes().subscribe(function (outras) {
            _this.novoOutras = outras;
        });
        setTimeout(function () {
            _this.moedasProvider.obterRestantes().subscribe(function (outras) {
                _this.novoOutras = outras;
                refresher.complete();
            });
        }, 2000);
    };
    OutrasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-outras',template:/*ion-inline-start:"/home/ruben/crypto-changes/src/pages/outras/outras.html"*/'<ion-header>\n  <ion-navbar color="golden">\n    <ion-title>\n      + Moedas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n        pullingText="Puxe para atualizar"\n        refreshingSpinner="circles"\n        refreshingText="Atualizando...">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n\n  <ion-card *ngFor="let outras of novoOutras | search : terms" color="dark">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://files.coinmarketcap.com/static/img/coins/32x32/{{outras.id}}.png">\n      </ion-avatar>\n      <p class="medio"><b>{{outras.name}}</b> - {{outras.symbol}}</p>\n      <p>Rank: {{outras.rank}}</p>\n    </ion-item>\n\n    <hr/>\n\n    <ion-card-content>\n      <p>Valor em $: <b>{{outras.price_usd}} $</b></p>\n      <p>Valor em €: <b>{{outras.price_eur}} €</b></p>\n      <p>Valor em ฿: <b>{{outras.price_btc}} ฿</b></p>\n    </ion-card-content>\n    <hr/>\n    <ion-label class="ajustado">Variações</ion-label>\n    <ion-row>\n      <ion-col>\n        <ion-label *ngIf="outras.percent_change_1h < 0" style="color: #DB2929;">\n          <b>1H: </b>{{outras.percent_change_1h}}\n        </ion-label>\n        <ion-label *ngIf="outras.percent_change_1h > 0" style="color: #9CCB19;">\n          <b>1H: </b>{{outras.percent_change_1h}}\n        </ion-label>\n        <ion-label *ngIf="outras.percent_change_1h == 0">\n          <b>1H: </b>{{outras.percent_change_1h}}\n        </ion-label>\n      </ion-col>\n\n      <ion-col>\n        <ion-label *ngIf="outras.percent_change_24h < 0" style="color: #DB2929;">\n          <b>24H: </b>{{outras.percent_change_24h}}\n        </ion-label>\n        <ion-label *ngIf="outras.percent_change_24h >= 0" style="color: #9CCB19;">\n          <b>24H: </b>{{outras.percent_change_24h}}\n        </ion-label>\n        <ion-label *ngIf="outras.percent_change_24h == 0">\n          <b>24H: </b>{{outras.percent_change_24h}}\n        </ion-label>\n      </ion-col>\n\n      <ion-col>\n        <ion-label *ngIf="outras.percent_change_7d < 0" style="color: #DB2929;">\n          <b>7d: </b>{{outras.percent_change_7d}}\n        </ion-label>\n        <ion-label *ngIf="outras.percent_change_7d >= 0" style="color: #9CCB19;">\n          <b>7d: </b>{{outras.percent_change_7d}}\n        </ion-label>\n        <ion-label *ngIf="outras.percent_change_7d == 0">\n          <b>7d: </b>{{outras.percent_change_7d}}\n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/ruben/crypto-changes/src/pages/outras/outras.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_moedas_moedas__["a" /* MoedasProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_moedas_moedas__["a" /* MoedasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], OutrasPage);
    return OutrasPage;
}());

//# sourceMappingURL=outras.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoedasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoedasProvider = (function () {
    function MoedasProvider(http) {
        this.http = http;
    }
    /*
        Método obterTop():

        Este método obtém o top 10 de moedas da Api (limit=10)

        Neste método também prezamos que seja obtido a cotação da respetiva moeda em euros (convert=EUR)
    */
    MoedasProvider.prototype.obterTop = function () {
        return this.http.get('https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10').map(function (res) { return res.json(); });
    };
    /*
        Método obterRestantes:

        Este método obtém todas as moedas da Api excluindo as que ja estão presentes no top 10

        Neste método também prezamos que seja obtido a cotação da respetiva moeda em euros (convert=EUR)
    */
    MoedasProvider.prototype.obterRestantes = function () {
        return this.http.get('https://api.coinmarketcap.com/v1/ticker/?start=10&convert=EUR').map(function (res) { return res.json(); });
    };
    MoedasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], MoedasProvider);
    return MoedasProvider;
}());

//# sourceMappingURL=moedas.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_moedas_moedas__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopPage = (function () {
    function TopPage(navCtrl, moedasProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.moedasProvider = moedasProvider;
        this.loadingCtrl = loadingCtrl;
        this.obterDadosTop();
    }
    TopPage.prototype.obterDadosTop = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Obtendo Informações...'
        });
        loading.present();
        this.moedasProvider.obterTop().subscribe(function (top) {
            _this.novoTop = top;
        }, function (err) {
            console.error("Erro: " + err);
        }, function () {
            loading.dismiss();
            console.log("Informações obtidas com sucesso");
        });
    };
    TopPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.moedasProvider.obterTop().subscribe(function (top) {
            _this.novoTop = top;
        });
        setTimeout(function () {
            _this.moedasProvider.obterTop().subscribe(function (top) {
                _this.novoTop = top;
                refresher.complete();
            });
        }, 2000);
    };
    TopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-top',template:/*ion-inline-start:"/home/ruben/crypto-changes/src/pages/top/top.html"*/'<ion-header>\n  <ion-navbar color="orangebrow">\n    <ion-title>TOP 10</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n        pullingText="Puxe para atualizar"\n        refreshingSpinner="circles"\n        refreshingText="Atualizando...">\n      </ion-refresher-content>\n    </ion-refresher>\n  \n  <ion-card *ngFor="let top of novoTop" color="dark">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://files.coinmarketcap.com/static/img/coins/32x32/{{top.id}}.png">\n      </ion-avatar>\n      <p class="medio"><b>{{top.name}}</b> - {{top.symbol}}</p>\n      <p>Rank: {{top.rank}}</p>\n    </ion-item>\n\n    <hr/>\n\n    <ion-card-content> \n      <p>Valor em $: <b>{{top.price_usd}} $</b></p>\n      <p>Valor em €: <b>{{top.price_eur}} €</b></p>\n      <p>Valor em ฿: <b>{{top.price_btc}} ฿</b></p>\n    </ion-card-content>\n    <hr>\n    <ion-label class="ajustado">Variações</ion-label>\n    <ion-row>\n      <ion-col>\n        <ion-label *ngIf="top.percent_change_1h < 0" style="color: #DB2929;">\n          <b>1H: </b>{{top.percent_change_1h}}\n        </ion-label>\n        <ion-label *ngIf="top.percent_change_1h > 0" style="color: #9CCB19;">\n          <b>1H: </b>{{top.percent_change_1h}}\n        </ion-label>\n        <ion-label *ngIf="top.percent_change_1h == 0">\n          <b>1H: </b>{{top.percent_change_1h}}\n        </ion-label>\n      </ion-col>\n\n      <ion-col>\n        <ion-label *ngIf="top.percent_change_24h < 0" style="color: #DB2929;">\n          <b>24H: </b>{{top.percent_change_24h}}\n        </ion-label>\n        <ion-label *ngIf="top.percent_change_24h >= 0" style="color: #9CCB19;">\n          <b>24H: </b>{{top.percent_change_24h}}\n        </ion-label>\n        <ion-label *ngIf="top.percent_change_24h == 0">\n          <b>24H: </b>{{top.percent_change_24h}}\n        </ion-label>\n      </ion-col>\n\n      <ion-col>\n        <ion-label *ngIf="top.percent_change_7d < 0" style="color: #DB2929;">\n          <b>7d: </b>{{top.percent_change_7d}}\n        </ion-label>\n        <ion-label *ngIf="top.percent_change_7d >= 0" style="color: #9CCB19;">\n          <b>7d: </b>{{top.percent_change_7d}}\n        </ion-label>\n        <ion-label *ngIf="top.percent_change_7d == 0">\n          <b>7d: </b>{{top.percent_change_7d}}\n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/ruben/crypto-changes/src/pages/top/top.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_moedas_moedas__["a" /* MoedasProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_moedas_moedas__["a" /* MoedasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], TopPage);
    return TopPage;
}());

//# sourceMappingURL=top.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_search_search__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sobre_sobre__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_outras_outras__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_top_top__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_outras_outras__["a" /* OutrasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_top_top__["a" /* TopPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_search_search__["a" /* SearchPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_outras_outras__["a" /* OutrasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_top_top__["a" /* TopPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ruben/crypto-changes/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ruben/crypto-changes/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(terms); // only filter country name
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map