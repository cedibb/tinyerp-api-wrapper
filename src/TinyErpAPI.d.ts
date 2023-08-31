export declare class TinyErpApi {
    private baseUrl;
    private token;
    constructor(token: string);
    private makeRequest;
    getNf(number: string): Promise<any>;
    getReceivables(name: string): Promise<any>;
    getReceivable(id: string): Promise<any>;
}
