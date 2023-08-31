"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinyErpApi = void 0;
class TinyErpApi {
  constructor(token) {
    this.baseUrl = `https://api.tiny.com.br/api2`;
    this.token = token;
  }
  makeRequest(endpoint, params) {
    return __awaiter(this, void 0, void 0, function* () {
      const url = new URL(`${this.baseUrl}${endpoint}.php`);
      const defaultParams = { formato: "json", token: this.token };
      const searchParams = new URLSearchParams(
        Object.assign(Object.assign({}, params), defaultParams)
      );
      url.search = searchParams.toString();
      return fetch(url.toString())
        .then((res) => res.json())
        .then((json) => json.retorno);
    });
  }
  getNf(number) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.makeRequest("/notas.fiscais.pesquisa", { numero: number });
    });
  }
  getReceivables(name) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.makeRequest("/contas.receber.pesquisa", {
        nome_cliente: name,
      });
    });
  }
  getReceivable(id) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.makeRequest("/conta.receber.obter", { id });
    });
  }
}
exports.TinyErpApi = TinyErpApi;
