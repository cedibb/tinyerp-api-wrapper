interface Receivable {
    id: number;
    data: string;
    vencimento: string;
    valor: number;
    saldo: number;
    link_boleto?: string;
    nro_documento?: string;
    serie_documento?: number;
    nro_banco?: string;
    competencia?: string;
    cliente: {
        codigo?: string;
        nome: string;
        tipo_pessoa?: string;
        cpf_cnpj?: string;
        ie?: string;
        rg?: string;
        endereco?: string;
        numero?: string;
        complemento?: string;
        bairro?: string;
        cep?: string;
        cidade?: string;
        uf?: string;
        pais?: string;
        fone?: string;
        email?: string;
    };
    historico?: string;
    categoria?: string;
    forma_pagamento?: string;
    portador?: string;
    situacao?: string;
    liquidacao?: string;
    ocorrencia: "U" | "P" | "W" | "M" | "T" | "S" | "A";
    dia_vencimento?: number;
    numero_parcelas?: number;
    dia_vencimento_semanal?: number;
}
export interface GetReceivableResponseData {
    conta?: Receivable[];
}
export interface SearchReceivableResponseData {
    pagina: number;
    numero_paginas: number;
    contas?: {
        conta: {
            id?: number;
            nome_cliente?: string;
            historico?: string;
            numero_banco?: string;
            numero_doc?: string;
            serie_doc?: number;
            data_vencimento?: string;
            data_emissao?: string;
            valor?: number;
            saldo?: number;
            situacao?: string;
        };
    }[];
}
export {};
