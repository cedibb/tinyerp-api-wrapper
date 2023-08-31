import {
  SearchContactsParameters,
  GetContactParameters,
  AddContactParameters,
  UpdateContactParameters,
} from "./types/parameters";

import {
  BaseApiResponse,
  AccountInfoResponse,
  SearchContactsResponse,
  GetContactResponse,
  AddContactResponse,
  UpdateContactResponse,
} from "./types/responses";

export class TinyErpAPI {
  private baseUrl: string;
  private token: string;

  constructor(token: string) {
    this.baseUrl = `https://api.tiny.com.br/api2`;
    this.token = token;
  }

  private async makeRequest<T extends BaseApiResponse>(
    endpoint: string,
    params?: Record<string, any>
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}.php`);
    const defaultParams = { formato: "json", token: this.token };
    const searchParams = new URLSearchParams({ ...params, ...defaultParams });
    url.search = searchParams.toString();

    return fetch(url.toString())
      .then((res) => res.json())
      .then((json) => json.retorno);
  }

  async getAccountInfo() {
    return this.makeRequest<AccountInfoResponse>("/info");
  }

  async searchContacts(params: SearchContactsParameters) {
    return this.makeRequest<SearchContactsResponse>(
      "/contatos.pesquisa",
      params
    );
  }

  async getContact(params: GetContactParameters) {
    return this.makeRequest<GetContactResponse>("/contato.obter", params);
  }

  async addContact(params: AddContactParameters) {
    return this.makeRequest<AddContactResponse>("/contato.incluir", params);
  }

  async updateContact(params: UpdateContactParameters) {
    return this.makeRequest<UpdateContactResponse>("/contato.alterar", params);
  }

  async getReceivables(name: string) {
    return this.makeRequest<BaseApiResponse>("/contas.receber.pesquisa", {
      nome_cliente: name,
    });
  }

  async getReceivable(id: string) {
    return this.makeRequest<BaseApiResponse>("/conta.receber.obter", { id });
  }
}
