import {
  SearchContactsParameters,
  GetContactParameters,
  AddContactParameters,
  UpdateContactParameters,
  SearchInvoicesParameters,
  GetInvoiceParameters,
  AddInvoiceParameters,
  GetReceivableParameters,
  SearchReceivableParameters,
} from "./types/parameters";

import {
  AccountInfoResponse,
  SearchContactsResponse,
  GetContactResponse,
  AddContactResponse,
  UpdateContactResponse,
} from "./types/responses";

import { BaseResponse } from "./types/responses/BaseResponse.types";

import {
  SearchInvoicesResponseData,
  GetInvoiceResponseData,
  AddInvoiceResponseData,
} from "./types/responses/InvoiceResponse.types";

import {
  GetReceivableResponseData,
  SearchReceivableResponseData,
} from "./types/responses/ReceivableResponse.types";

export class TinyErpAPI {
  private baseUrl: string;
  private token: string;

  constructor(token: string) {
    this.baseUrl = `https://api.tiny.com.br/api2`;
    this.token = token;
  }

  private async makeRequest<T>(endpoint: string, params?: Record<string, any>) {
    const url = new URL(`${this.baseUrl}${endpoint}.php`);
    const defaultParams = { formato: "json", token: this.token };
    const searchParams = new URLSearchParams({ ...params, ...defaultParams });
    url.search = searchParams.toString();

    return fetch(url.toString())
      .then((res) => res.json())
      .then((json: BaseResponse<T>) => json.retorno);
  }

  account = {
    getInfo: () => this.makeRequest<AccountInfoResponse>("/info"),
  };

  contact = {
    search: (params: SearchContactsParameters) =>
      this.makeRequest<SearchContactsResponse>("/contatos.pesquisa", params),

    get: (params: GetContactParameters) =>
      this.makeRequest<GetContactResponse>("/contato.obter", params),

    add: (params: AddContactParameters) =>
      this.makeRequest<AddContactResponse>("/contato.incluir", params),

    udpdate: (params: UpdateContactParameters) =>
      this.makeRequest<UpdateContactResponse>("/contato.alterar", params),
  };

  receivable = {
    search: (params: SearchReceivableParameters) =>
      this.makeRequest<SearchReceivableResponseData>(
        "/contas.receber.pesquisa",
        params
      ),

    get: (params: GetReceivableParameters) =>
      this.makeRequest<GetReceivableResponseData>(
        "/conta.receber.obter",
        params
      ),
  };

  invoice = {
    search: (params: SearchInvoicesParameters) =>
      this.makeRequest<SearchInvoicesResponseData>(
        "/notas.fiscais.pesquisa",
        params
      ),

    get: (params: GetInvoiceParameters) =>
      this.makeRequest<GetInvoiceResponseData>("/nota.fiscal.obter", params),

    add: (params: AddInvoiceParameters) =>
      this.makeRequest<AddInvoiceResponseData>("/nota.fiscal.incluir", params),
  };

  // async addMarkersToInvoice(params: AddMarkersToInvoiceParameters) {
  //   return this.makeRequest<BaseApiResponse>(
  //     "/nota.fiscal.marcador.incluir",
  //     params
  //   );
  // }

  // async removeMarkersFromInvoice(params: RemoveMarkersFromInvoiceParameters) {
  //   return this.makeRequest<BaseApiResponse>(
  //     "/nota.fiscal.marcador.excluir",
  //     params
  //   );
  // }

  // async addConsumerInvoice(params: AddConsumerInvoiceParameters) {
  //   return this.makeRequest<BaseApiResponse>(
  //     "/nota.fiscal.consumidor.incluir",
  //     params
  //   );
  // }

  // async addInvoiceViaXML(params: AddInvoiceViaXMLParameters) {
  //   return this.makeRequest<BaseApiResponse>(
  //     "/nota.fiscal.incluir.xml",
  //     params
  //   );
  // }

  // async getInvoiceXML(params: GetInvoiceXMLParameters) {
  //   return this.makeRequest<GetInvoiceXMLResponse>(
  //     "/nota.fiscal.obter.xml",
  //     params
  //   );
  // }

  // async getInvoiceLink(params: GetInvoiceLinkParameters) {
  //   return this.makeRequest<GetInvoiceLinkResponse>(
  //     "/nota.fiscal.obter.link",
  //     params
  //   );
  // }
}
