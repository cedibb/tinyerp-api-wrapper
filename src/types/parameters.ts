interface BaseApiParameters {
  token: string;
  formato: "json";
}

export interface GetOrdersParameters extends BaseApiParameters {
  numero?: string;
  cliente?: string;
  cpf_cnpj?: string;
  dataInicial?: string;
  dataFinal?: string;
  dataAtualizacao?: string;
  situacao?: string;
  numeroEcommerce?: string;
  idVendedor?: string;
  nomeVendedor?: string;
  marcador?: string;
  dataInicialOcorrencia?: string;
  dataFinalOcorrencia?: string;
  situacaoOcorrencia?: string;
  pagina?: number;
  sort?: "ASC" | "DESC";
}
