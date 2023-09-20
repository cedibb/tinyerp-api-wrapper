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

export interface SearchInvoicesParameters extends BaseApiParameters {
  tipoNota?: "E" | "S";
  numero?: string;
  cliente?: string;
  cpf_cnpj?: string;
  dataInicial?: string;
  dataFinal?: string;
  situacao?: number;
  numeroEcommerce?: string;
  idVendedor?: number;
  idFormaEnvio?: number;
  nomeVendedor?: string;
  pagina?: number;
}

export interface GetInvoiceParameters extends BaseApiParameters {
  id: number;
}

interface Customer {
  code?: string;
  name: string;
  person_type?: string;
  tax_id?: string;
  state_registration?: string;
  id_number?: string;
  address?: string;
  number?: string;
  complement?: string;
  district?: string;
  zip_code?: string;
  city?: string;
  state?: string;
  country?: string;
  phone?: string;
  email?: string;
  update_customer?: string;
}

interface DeliveryAddress {
  person_type?: string;
  tax_id?: string;
  address?: string;
  number?: string;
  complement?: string;
  district?: string;
  zip_code?: string;
  city?: string;
  state?: string;
  phone?: string;
  recipient_name?: string;
  state_registration?: string;
}

interface Item {
  product_id?: number;
  code?: string;
  description: string;
  unit: string;
  quantity: number;
  unit_price: number;
  type: string;
  origin?: string;
  fci_number?: string;
  ncm?: string;
  gross_weight?: number;
  net_weight?: number;
  gtin_ean?: string;
  packaging_gtin_ean?: string;
  service_list_code?: string;
  commission_rate?: number;
  cest?: string;
  purchase_order_number?: string;
  purchase_order_item_number?: number;
  additional_description?: string;
  anvisa_code?: string;
  max_price?: number;
  exemption_reason?: string;
}

interface Installment {
  days?: number;
  date?: string;
  amount?: number;
  note?: string;
  destination?: string;
  payment_method?: string;
  payment_method_description?: string;
  nfe_payment_method_code?: number;
}

interface Carrier {
  code?: string;
  name?: string;
  person_type?: string;
  tax_id?: string;
  state_registration?: string;
  address?: string;
  city?: string;
  state?: string;
}

interface Intermediary {
  name: string;
  tax_id: string;
  payment_institution_tax_id?: string;
}

interface Invoice {
  type?: string;
  operation_nature_id?: number;
  operation_nature?: string;
  issuance_date?: string;
  issuance_time?: string;
  entry_exit_date?: string;
  entry_exit_time?: string;
  customer: Customer;
  delivery_address?: DeliveryAddress;
  items: Item[];
  markers?: { marker: { description?: string } }[];
  payment_method?: string;
  payment_method_description?: string;
  installments?: Installment[];
  carrier?: Carrier;
  shipment_method?: string;
  shipment_type?: string;
  freight_by_sender: string;
  vehicle_plate?: string;
  vehicle_state?: string;
  number_of_packages?: number;
  package_species?: string;
  package_brand?: string;
  package_number?: string;
  discount_amount?: number;
  freight_amount?: number;
  insurance_amount?: number;
  other_expenses_amount?: number;
  producer_rural_invoice?: {
    series?: string;
    number?: string;
    issuance_year_month?: string;
  };
  seller_id?: number;
  seller_name?: string;
  ecommerce_order_number?: string;
  purpose?: number;
  refNFe?: string;
  note?: string;
  ecommerce?: string;
  intermediary?: Intermediary;
}

export interface AddInvoiceParameters extends BaseApiParameters {
  invoice: Invoice;
}

export interface GetReceivableParameters {
  id: number;
  obter_link_boleto?: "N" | "S";
}

export interface SearchReceivableParameters extends BaseApiParameters {
  nome_cliente?: string;
  numero_doc?: string;
  numero_banco?: string;
  data_ini_emissao?: string;
  data_fim_emissao?: string;
  data_ini_vencimento?: string;
  data_fim_vencimento?: string;
  situacao?: "aberto" | "pago" | "cancelada" | "parcial";
  id_origem?: string;
  pagina?: number;
}
