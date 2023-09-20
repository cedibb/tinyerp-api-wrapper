export interface BaseResponse<T> {
  retorno: T & {
    status_processamento: number;
    status: "OK" | "Erro";
    codigo_erro?: number;
    erros?: {
      erro: string;
    }[];
  };
}
