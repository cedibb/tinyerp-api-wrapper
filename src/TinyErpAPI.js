"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinyErpAPI = void 0;
class TinyErpAPI {
    constructor(token) {
        this.account = {
            getInfo: () => this.makeRequest("/info"),
        };
        this.contact = {
            search: (params) => this.makeRequest("/contatos.pesquisa", params),
            get: (params) => this.makeRequest("/contato.obter", params),
            add: (params) => this.makeRequest("/contato.incluir", params),
            udpdate: (params) => this.makeRequest("/contato.alterar", params),
        };
        this.receivable = {
            search: (params) => this.makeRequest("/contas.receber.pesquisa", params),
            get: (params) => this.makeRequest("/conta.receber.obter", params),
        };
        this.invoice = {
            search: (params) => this.makeRequest("/notas.fiscais.pesquisa", params),
            get: (params) => this.makeRequest("/nota.fiscal.obter", params),
            add: (params) => this.makeRequest("/nota.fiscal.incluir", params),
        };
        this.baseUrl = `https://api.tiny.com.br/api2`;
        this.token = token;
    }
    makeRequest(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = new URL(`${this.baseUrl}${endpoint}.php`);
            const defaultParams = { formato: "json", token: this.token };
            const searchParams = new URLSearchParams(Object.assign(Object.assign({}, params), defaultParams));
            url.search = searchParams.toString();
            return fetch(url.toString())
                .then((res) => res.json())
                .then((json) => json.retorno);
        });
    }
}
exports.TinyErpAPI = TinyErpAPI;
