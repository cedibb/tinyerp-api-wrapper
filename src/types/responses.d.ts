interface Contact {
    id: number;
    codigo: string;
    nome: string;
    fantasia?: string;
    tipo_pessoa: "F" | "J" | "E";
    cpf_cnpj: string;
    endereco?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cep?: string;
    cidade?: string;
    uf?: string;
    email?: string;
    fone?: string;
    id_lista_preco?: number;
    id_vendedor?: number;
    nome_vendedor?: string;
    situacao?: "Ativo" | "Excluido";
    data_criacao?: string;
}
export interface SearchContactsResponse extends BaseApiResponse {
    pagina: number;
    numero_paginas: number;
    contatos?: Contact[];
}
interface ContactInfo {
    contato: {
        id: number;
        codigo: string;
        nome: string;
        fantasia: string;
        tipo_pessoa: "F" | "J" | "E";
        cpf_cnpj: string;
        ie?: string;
        rg?: string;
        im?: string;
        endereco: string;
        numero: string;
        complemento: string;
        bairro: string;
        cep: string;
        cidade: string;
        uf: string;
        pais?: string;
        endereco_cobranca?: string;
        numero_cobranca?: string;
        complemento_cobranca?: string;
        bairro_cobranca?: string;
        cep_cobranca?: string;
        cidade_cobranca?: string;
        uf_cobranca?: string;
        contatos?: string;
        fone: string;
        fax?: string;
        celular?: string;
        email: string;
        email_nfe?: string;
        site?: string;
        crt?: string;
        estadoCivil?: number;
        profissao?: string;
        sexo?: "masculino" | "feminino";
        data_nascimento?: string;
        naturalidade?: string;
        nome_pai?: string;
        cpf_pai?: string;
        nome_mae?: string;
        cpf_mae?: string;
        limite_credito?: number;
        situacao: "A" | "E" | "I" | "S";
        obs?: string;
        id_lista_preco?: number;
        id_vendedor?: number;
        nome_vendedor?: string;
        data_criacao: string;
        data_atualizacao: string;
        tipos_contato?: {
            tipo: string;
        }[];
        pessoas_contato?: {
            pessoa_contato: {
                id_pessoa: number;
                nome: string;
                telefone: string;
                ramal?: string;
                email: string;
                departamento?: string;
            };
        }[];
    };
}
export interface GetContactResponse extends BaseApiResponse {
    contato?: ContactInfo;
}
export interface Registers extends BaseApiResponse {
    registros?: {
        registro: {
            sequencia: number;
            status: string;
            codigo_erro: number;
            erros?: {
                erro: string;
            }[];
            id: number;
        };
    }[];
}
export interface AddContactResponse extends Registers {
}
export interface UpdateContactResponse extends Registers {
}
export interface BaseApiResponse {
    retorno: {
        status_processamento: number;
        status: "OK" | "Erro";
        codigo_erro?: number;
        erros?: {
            erro: string;
        }[];
    };
}
export interface BaseApiResponse {
    retorno: {
        status_processamento: number;
        status: "OK" | "Erro";
        codigo_erro?: number;
        erros?: {
            erro: string;
        }[];
    };
}
interface AccountInfo {
    razao_social: string;
    cnpj_cpf: string;
    fantasia: string;
    endereco: string;
    numero: string;
    bairro: string;
    complemento: string;
    cidade: string;
    estado: string;
    cep: string;
    fone: string;
    email: string;
    inscricao_estadual: string;
    regime_tributario: string;
}
export interface AccountInfoResponseData extends BaseApiResponseData {
    conta?: AccountInfo;
}
export interface AccountInfoResponse {
    retorno: AccountInfoResponseData;
}
export interface BaseApiResponseData {
    status_processamento: number;
    status: "OK" | "Erro";
    codigo_erro?: number;
    erros?: {
        erro: string;
    }[];
}
export {};
