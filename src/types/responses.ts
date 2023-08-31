interface BaseApiResponse {
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

export interface AccountInfoResponse extends BaseApiResponse {
  conta?: AccountInfo;
}
