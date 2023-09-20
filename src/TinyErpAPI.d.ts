import { SearchContactsParameters, GetContactParameters, AddContactParameters, UpdateContactParameters, SearchInvoicesParameters, GetInvoiceParameters, AddInvoiceParameters, GetReceivableParameters, SearchReceivableParameters } from "./types/parameters";
import { AccountInfoResponse, SearchContactsResponse, GetContactResponse, AddContactResponse, UpdateContactResponse } from "./types/responses";
import { SearchInvoicesResponseData, GetInvoiceResponseData, AddInvoiceResponseData } from "./types/responses/InvoiceResponse.types";
import { GetReceivableResponseData, SearchReceivableResponseData } from "./types/responses/ReceivableResponse.types";
export declare class TinyErpAPI {
    private baseUrl;
    private token;
    constructor(token: string);
    private makeRequest;
    account: {
        getInfo: () => Promise<AccountInfoResponse & {
            status_processamento: number;
            status: "OK" | "Erro";
            codigo_erro?: number | undefined;
            erros?: {
                erro: string;
            }[] | undefined;
        }>;
    };
    contact: {
        search: (params: SearchContactsParameters) => Promise<SearchContactsResponse & {
            status_processamento: number;
            status: "OK" | "Erro";
            codigo_erro?: number | undefined;
            erros?: {
                erro: string;
            }[] | undefined;
        }>;
        get: (params: GetContactParameters) => Promise<GetContactResponse & {
            status_processamento: number;
            status: "OK" | "Erro";
            codigo_erro?: number | undefined;
            erros?: {
                erro: string;
            }[] | undefined;
        }>;
        add: (params: AddContactParameters) => Promise<AddContactResponse & {
            status_processamento: number;
            status: "OK" | "Erro";
            codigo_erro?: number | undefined;
            erros?: {
                erro: string;
            }[] | undefined;
        }>;
        udpdate: (params: UpdateContactParameters) => Promise<UpdateContactResponse & {
            status_processamento: number;
            status: "OK" | "Erro";
            codigo_erro?: number | undefined;
            erros?: {
                erro: string;
            }[] | undefined;
        }>;
    };
    receivable: {
        search: (params: SearchReceivableParameters) => Promise<SearchReceivableResponseData & {
            status_processamento: number;
            status: "OK" | "Erro";
            codigo_erro?: number | undefined;
            erros?: {
                erro: string;
            }[] | undefined;
        }>;
        get: (params: GetReceivableParameters) => Promise<GetReceivableResponseData & {
            status_processamento: number;
            status: "OK" | "Erro";
            codigo_erro?: number | undefined;
            erros?: {
                erro: string;
            }[] | undefined;
        }>;
    };
    invoice: {
        search: (params: SearchInvoicesParameters) => Promise<SearchInvoicesResponseData & {
            status_processamento: number;
            status: "OK" | "Erro";
            codigo_erro?: number | undefined;
            erros?: {
                erro: string;
            }[] | undefined;
        }>;
        get: (params: GetInvoiceParameters) => Promise<GetInvoiceResponseData & {
            status_processamento: number;
            status: "OK" | "Erro";
            codigo_erro?: number | undefined;
            erros?: {
                erro: string;
            }[] | undefined;
        }>;
        add: (params: AddInvoiceParameters) => Promise<AddInvoiceResponseData & {
            status_processamento: number;
            status: "OK" | "Erro";
            codigo_erro?: number | undefined;
            erros?: {
                erro: string;
            }[] | undefined;
        }>;
    };
}
