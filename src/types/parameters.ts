interface BaseApiParameters {
  token: string;
  formato: "json";
}

export interface SearchContactsParameters extends BaseApiParameters {
  pesquisa: string;
  cpf_cnpj?: string;
  idVendedor?: number;
  nomeVendedor?: string;
  situacao?: "Ativo" | "Excluido";
  pagina?: number;
  dataCriacao?: string;
  dataMinimaAtualizacao?: string;
}

export interface GetContactParameters extends BaseApiParameters {
  id: number;
}

interface ContactInfo {
  id?: number;
  codigo?: string;
  nome: string;
  fantasia?: string;
  tipo_pessoa: "F" | "J" | "E";
  cpf_cnpj: string;
  ie?: string;
  rg?: string;
  im?: string;
  endereco: string;
  numero: string;
  complemento?: string;
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
  fone?: string;
  fax?: string;
  celular?: string;
  email?: string;
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
  situacao?: "A" | "E" | "I" | "S";
  obs?: string;
  id_lista_preco?: number;
  id_vendedor?: number;
  nome_vendedor?: string;
  tipos_contato?: {
    tipo: string;
  }[];
  pessoas_contato?: {
    pessoa_contato: {
      id_pessoa?: number;
      nome: string;
      telefone?: string;
      ramal?: string;
      email?: string;
      departamento?: string;
    };
  }[];
}

export interface AddContactParameters extends BaseApiParameters {
  contato: ContactInfo;
}

export interface UpdateContactParameters extends BaseApiParameters {
  contato: ContactInfo;
}
