export interface SearchInvoicesResponseData {
  pagina: number;
  numero_paginas: number;
  notas_fiscais?: {
    nota_fiscal: {
      id?: number;
      tipo?: "E" | "S";
      serie?: number;
      numero?: number;
      numero_ecommerce?: string;
      data_emissao?: string;
      nome?: string;
      cliente?: {
        nome: string;
        tipo_pessoa?: "F" | "J" | "E";
        cpf_cnpj?: string;
        ie?: string;
        endereco?: string;
        numero?: string;
        complemento?: string;
        bairro?: string;
        cep?: string;
        cidade?: string;
        uf?: string;
        fone?: string;
        email?: string;
      };
      endereco_entrega?: {
        tipo_pessoa?: "F" | "J" | "E";
        cpf_cnpj?: string;
        endereco?: string;
        numero?: string;
        complemento?: string;
        bairro?: string;
        cep?: string;
        cidade?: string;
        uf?: string;
        fone?: string;
        nome_destinatario?: string;
      };
      transportador?: {
        nome: string;
      };
      valor?: number;
      valor_produtos?: number;
      valor_frete?: number;
      id_vendedor?: number;
      nome_vendedor?: string;
      situacao?: number;
      descricao_situacao?: string;
      chave_acesso?: string;
      id_forma_frete?: string;
      id_forma_envio?: string;
      codigo_rastreamento?: string;
      url_rastreamento?: string;
    };
  }[];
}

export interface GetInvoiceResponseData {
  nota_fiscal?: {
    id?: number;
    tipo_nota?: string;
    natureza_operacao?: string;
    regime_tributario?: number;
    finalidade?: number;
    serie?: number;
    numero?: number;
    numero_ecommerce?: string;
    data_emissao?: string;
    data_saida?: string;
    hora_saida?: string;
    cliente?: {
      nome: string;
      tipo_pessoa?: string;
      cpf_cnpj?: string;
      ie?: string;
      endereco?: string;
      numero?: string;
      complemento?: string;
      bairro?: string;
      cep?: string;
      cidade?: string;
      uf?: string;
      fone?: string;
      email?: string;
    };
    endereco_entrega?: {
      tipo_pessoa?: string;
      cpf_cnpj?: string;
      endereco?: string;
      numero?: string;
      complemento?: string;
      bairro?: string;
      cep?: string;
      cidade?: string;
      uf?: string;
      fone?: string;
      nome_destinatario?: string;
      ie?: string;
    };
    itens: {
      item: {
        id_produto?: number;
        codigo?: string;
        descricao: string;
        unidade: string;
        ncm: string;
        quantidade: number;
        valor_unitario: number;
        valor_total: number;
        cfop: string;
        natureza: string;
      };
    }[];
    base_icms?: number;
    valor_icms?: number;
    base_icms_st?: number;
    valor_icms_st?: number;
    valor_servicos?: number;
    valor_produtos?: number;
    valor_frete?: number;
    valor_seguro?: number;
    valor_outras?: number;
    valor_ipi?: number;
    valor_issqn?: number;
    valor_nota?: number;
    valor_desconto?: number;
    valor_faturado?: number;
    frete_por_conta?: string;
    transportador?: {
      nome: string;
      cpf_cnpj?: string;
      ie?: string;
      endereco?: string;
      cidade?: string;
      uf?: string;
    };
    placa?: string;
    uf_placa?: string;
    quantidade_volumes?: number;
    especie_volumes?: string;
    marca_volumes?: string;
    numero_volumes?: string;
    peso_bruto?: number;
    peso_liquido?: number;
    forma_envio?: {
      id: number;
      descricao: string;
    };
    forma_frete?: {
      id: number;
      descricao: string;
    };
    codigo_rastreamento?: string;
    url_rastreamento?: string;
    forma_pagamento?: string;
    meio_pagamento?: string;
    condicao_pagamento?: string;
    parcelas?: {
      parcela: {
        dias?: number;
        data?: string;
        valor?: number;
        obs?: string;
        forma_pagamento?: string;
        meio_pagamento?: string;
      };
    }[];
    id_venda?: number;
    id_vendedor?: number;
    nome_vendedor?: string;
    situacao?: number;
    descricao_situacao?: string;
    obs?: string;
    chave_acesso?: string;
    marcadores?: {
      marcador: {
        id?: number;
        descricao?: string;
        cor?: string;
      };
    }[];
    intermediador?: {
      nome: string;
      cnpj: string;
      cnpjPagamento?: string;
    };
  };
}

export interface AddInvoiceResponseData {
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
