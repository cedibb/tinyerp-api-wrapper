import { AccountInfoResponse } from "./types/responses";

export class TinyErpAPI {
  private baseUrl: string;
  private token: string;

  constructor(token: string) {
    this.baseUrl = `https://api.tiny.com.br/api2`;
    this.token = token;
  }

  private async makeRequest(endpoint: string, params?: Record<string, string>) {
    const url = new URL(`${this.baseUrl}${endpoint}.php`);
    const defaultParams = { formato: "json", token: this.token };
    const searchParams = new URLSearchParams({ ...params, ...defaultParams });
    url.search = searchParams.toString();
    return fetch(url.toString())
      .then((res) => res.json())
      .then((json) => json.retorno);
  }

  async getAccountInfo(): Promise<AccountInfoResponse> {
    return this.makeRequest("/info");
  }

  async getNf(number: string) {
    return this.makeRequest("/notas.fiscais.pesquisa", { numero: number });
  }

  async getReceivables(name: string) {
    return this.makeRequest("/contas.receber.pesquisa", { nome_cliente: name });
  }

  async getReceivable(id: string) {
    return this.makeRequest("/conta.receber.obter", { id });
  }
}
