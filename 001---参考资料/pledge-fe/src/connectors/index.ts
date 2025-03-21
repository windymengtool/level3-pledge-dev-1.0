import { Web3Provider } from '@ethersproject/providers';
// import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react'
import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from '../constants/chains';
// import chainInfos from '@/constants/chainInfos';
// import { map } from 'lodash';
import { INFURA_NETWORK_URLS } from '../constants/infura';
import { InjectedConnector } from '@web3-react/injected-connector';
// import { PortisConnector } from '@web3-react/portis-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import UNISWAP_LOGO_URL from '../assets/images/logo-link.svg';
import { NetworkConnector } from './NetworkConnector';

export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '97');

export const network = new NetworkConnector({
  urls: INFURA_NETWORK_URLS,
  defaultChainId: 1,
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  // eslint-disable-next-line no-return-assign
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any));
}
// import getLibrary from '../utils/getLibrary'
// import { FortmaticConnector } from './Fortmatic'
// import { NetworkConnector } from './NetworkConnector'

// const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY
// const PORTIS_ID = process.env.REACT_APP_PORTIS_ID

// let networkLibrary: Web3Provider | undefined
// export function getNetworkLibrary(): Web3Provider {
//   return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
// }

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});

// export const gnosisSafe = new SafeAppConnector()

// const ALL_SUPPORTED_CHAIN_IDS =  map(chainInfos, (c) => c.chainId)
export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: INFURA_NETWORK_URLS,
  qrcode: true,
});

// mainnet only
// export const fortmatic = new FortmaticConnector({
//   apiKey: FORMATIC_KEY ?? '',
//   chainId: 1,
// })

// mainnet only
// export const portis = new PortisConnector({
//   dAppId: PORTIS_ID ?? '',
//   networks: [1],
// })

export const walletlink = new WalletLinkConnector({
  url: INFURA_NETWORK_URLS[SupportedChainId.MAINNET],
  appName: 'Uniswap',
  // appLogoUrl: UNISWAP_LOGO_URL,
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});
