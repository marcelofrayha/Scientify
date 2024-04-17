import { BaseApiClient, Network } from '@openzeppelin/defender-sdk-base-client';
import { TenantNetworkCreateRequest, TenantNetworkResponse, TenantNetworkUpdateRequest, ListNetworkRequestOptions } from '../models/networks';
export declare class NetworkClient extends BaseApiClient {
    protected getPoolId(): string;
    protected getPoolClientId(): string;
    protected getApiUrl(): string;
    listSupportedNetworks(params?: ListNetworkRequestOptions): Promise<Network[]>;
    listForkedNetworks(): Promise<TenantNetworkResponse[]>;
    createForkedNetwork(network: Omit<TenantNetworkCreateRequest, 'networkType'>): Promise<TenantNetworkResponse>;
    deleteForkedNetwork(id: string): Promise<string>;
    getForkedNetwork(id: string): Promise<TenantNetworkResponse>;
    updateForkedNetwork(id: string, network: Omit<TenantNetworkUpdateRequest, 'tenantNetworkId'>): Promise<TenantNetworkResponse>;
    listPrivateNetworks(): Promise<TenantNetworkResponse[]>;
    createPrivateNetwork(network: Omit<TenantNetworkCreateRequest, 'networkType'>): Promise<TenantNetworkResponse>;
    deletePrivateNetwork(id: string): Promise<string>;
    getPrivateNetwork(id: string): Promise<TenantNetworkResponse>;
    updatePrivateNetwork(id: string, network: Omit<TenantNetworkUpdateRequest, 'tenantNetworkId'>): Promise<TenantNetworkResponse>;
}
//# sourceMappingURL=index.d.ts.map