// Everyday apps & platforms
import gmailLogo from '../assets/app_logos/gmail.svg';
import calendarLogo from '../assets/app_logos/google_calendar.svg';
import mapsLogo from '../assets/app_logos/google_maps.svg';
import uberLogo from '../assets/app_logos/uber.svg';
import amazonLogo from '../assets/app_logos/amazon.svg';
import doordashLogo from '../assets/app_logos/doordash.svg';
import spotifyLogo from '../assets/app_logos/spotify.svg';
import notionLogo from '../assets/app_logos/notion.svg';
import xLogo from '../assets/app_logos/x.svg';
import discordLogo from '../assets/app_logos/discord.svg';
import tradingviewLogo from '../assets/app_logos/tradingview.svg';
import robinhoodLogo from '../assets/app_logos/robinhood.svg';
import coingeckoLogo from '../assets/app_logos/coingecko.svg';
import githubLogo from '../assets/app_logos/github.svg';
import canvaLogo from '../assets/app_logos/canva.svg';
import baseAppLogo from '../assets/app_logos/base_app.svg';

// US Lifestyle apps
import lyftLogo from '../assets/app_logos/lyft.svg';
import airbnbLogo from '../assets/app_logos/airbnb.svg';
import instacartLogo from '../assets/app_logos/instacart.svg';
import netflixLogo from '../assets/app_logos/netflix.svg';
import redditLogo from '../assets/app_logos/reddit.svg';

// Crypto wallet, exchange, and protocol logos
import logo01 from '../assets/crypto_logos/logo_01.webp';
import logo02 from '../assets/crypto_logos/logo_02.webp';
import logo03 from '../assets/crypto_logos/logo_03.webp';
import logo04 from '../assets/crypto_logos/logo_04.webp';
import logo05 from '../assets/crypto_logos/logo_05.webp';
import logo06 from '../assets/crypto_logos/logo_06.webp';
import logo07 from '../assets/crypto_logos/logo_07.webp';
import logo08 from '../assets/crypto_logos/logo_08.webp';
import logo09 from '../assets/crypto_logos/logo_09.webp';
import logo10 from '../assets/crypto_logos/logo_10.webp';
import logo11 from '../assets/crypto_logos/logo_11.webp';
import logo13 from '../assets/crypto_logos/logo_13.webp';
import logo14 from '../assets/crypto_logos/logo_14.webp';
import logo15 from '../assets/crypto_logos/logo_15.webp';
import logo16 from '../assets/crypto_logos/logo_16.webp';
import logo17 from '../assets/crypto_logos/logo_17.webp';
import logo18 from '../assets/crypto_logos/logo_18.webp';
import logo19 from '../assets/crypto_logos/logo_19.webp';
import krakenLogo from '../assets/crypto_logos/kraken.webp';
import jupiterLogo from '../assets/crypto_logos/jupiter.webp';
import rainbowLogo from '../assets/crypto_logos/rainbow.webp';
import zerionLogo from '../assets/crypto_logos/zerion.webp';
import oneinchLogo from '../assets/crypto_logos/oneinch.webp';
import rabbyLogo from '../assets/crypto_logos/rabby.webp';

// New DeFi, AI & Web3 Infrastructure Protocols
import aerodromeLogo from '../assets/crypto_logos/aerodrome.svg';
import virtualsLogo from '../assets/crypto_logos/virtuals.svg';
import moonwellLogo from '../assets/crypto_logos/moonwell.webp';
import morphoLogo from '../assets/crypto_logos/morpho.svg';
import uniswapLogo from '../assets/crypto_logos/uniswap.webp';
import coinbaseCdpLogo from '../assets/crypto_logos/coinbase_cdp.svg';
import chainlinkLogo from '../assets/crypto_logos/chainlink.svg';
import thegraphLogo from '../assets/crypto_logos/thegraph.svg';
import clusterLogo from '../assets/crypto_logos/cluster.webp';
import bubblemapsLogo from '../assets/crypto_logos/bubblemaps.svg';
import nearLogo from '../assets/crypto_logos/near.svg';

export interface EcosystemLogo {
  id: string;
  src: string;
  alt: string;
  href?: string;
}

// ── ROW 1: Everyday Lifestyle & Consumer Apps (10 Unique, Moving Left) ──
export const ROW_1_LOGOS: EcosystemLogo[] = [
  { id: 'app-gmail', src: gmailLogo, alt: 'Gmail' },
  { id: 'app-maps', src: mapsLogo, alt: 'Google Maps' },
  { id: 'app-calendar', src: calendarLogo, alt: 'Google Calendar' },
  { id: 'app-uber', src: uberLogo, alt: 'Uber' },
  { id: 'app-amazon', src: amazonLogo, alt: 'Amazon' },
  { id: 'app-doordash', src: doordashLogo, alt: 'DoorDash' },
  { id: 'app-spotify', src: spotifyLogo, alt: 'Spotify' },
  { id: 'app-canva', src: canvaLogo, alt: 'Canva' },
  { id: 'app-notion', src: notionLogo, alt: 'Notion' },
  { id: 'app-github', src: githubLogo, alt: 'GitHub' },
];

// ── ROW 2: Major Global Exchanges & Protocols (10 Unique, Moving Right) ──
export const ROW_2_LOGOS: EcosystemLogo[] = [
  { id: 'ex-okx', src: logo05, alt: 'OKX' },
  { id: 'ex-bybit', src: logo16, alt: 'Bybit' },
  { id: 'ex-kucoin', src: logo17, alt: 'KuCoin' },
  { id: 'ex-gate', src: logo13, alt: 'Gate.io' },
  { id: 'ex-bitget', src: logo15, alt: 'Bitget' },
  { id: 'ex-cryptocom', src: logo18, alt: 'Crypto.com' },
  { id: 'w-uniswap', src: logo06, alt: 'Uniswap' },
  { id: 'w-polygon', src: logo14, alt: 'Polygon' },
  { id: 'w-jupiter', src: jupiterLogo, alt: 'Jupiter' },
  { id: 'w-oneinch', src: oneinchLogo, alt: '1inch' },
];

// ── ROW 3: Productivity, Social & Market Intelligence (Moving Left) ──
export const ROW_3_LOGOS: EcosystemLogo[] = [
  { id: 'app-tradingview', src: tradingviewLogo, alt: 'TradingView' },
  { id: 'app-robinhood', src: robinhoodLogo, alt: 'Robinhood' },
  { id: 'app-coingecko', src: coingeckoLogo, alt: 'CoinGecko' },
  { id: 'app-x', src: xLogo, alt: 'X' },
  { id: 'app-discord', src: discordLogo, alt: 'Discord' },
  { id: 'ex-binance', src: logo10, alt: 'Binance' },
  { id: 'ex-coinbase', src: logo11, alt: 'Coinbase' },
  { id: 'app-base', src: baseAppLogo, alt: 'Base App' },
  { id: 'ex-mexc', src: logo19, alt: 'MEXC' },
  { id: 'ex-kraken', src: krakenLogo, alt: 'Kraken' },
];

// ── ROW 4: Web3 Wallets, Hardware & Custody (10 Unique, Moving Right) ──
export const ROW_4_LOGOS: EcosystemLogo[] = [
  { id: 'w-metamask', src: logo02, alt: 'MetaMask' },
  { id: 'w-phantom', src: logo03, alt: 'Phantom' },
  { id: 'w-trust', src: logo04, alt: 'Trust Wallet' },
  { id: 'w-rabby', src: rabbyLogo, alt: 'Rabby Wallet' },
  { id: 'w-rainbow', src: rainbowLogo, alt: 'Rainbow Wallet' },
  { id: 'w-zerion', src: zerionLogo, alt: 'Zerion' },
  { id: 'w-coinbase-wallet', src: logo01, alt: 'Coinbase Wallet' },
  { id: 'w-exodus', src: logo07, alt: 'Exodus' },
  { id: 'w-ledger', src: logo08, alt: 'Ledger' },
  { id: 'w-trezor', src: logo09, alt: 'Trezor' },
];

// ── ROW 5: DeFi, AI Agent & Web3 Infrastructure Protocols (9 Unique, Moving Left) ──
export const ROW_5_LOGOS: EcosystemLogo[] = [
  { id: 'p-aerodrome', src: aerodromeLogo, alt: 'Aerodrome Finance', href: 'https://aerodrome.finance/' },
  { id: 'p-virtuals', src: virtualsLogo, alt: 'Virtuals Protocol', href: 'https://www.virtuals.io/' },
  { id: 'p-moonwell', src: moonwellLogo, alt: 'Moonwell', href: 'https://moonwell.fi/' },
  { id: 'p-morpho', src: morphoLogo, alt: 'Morpho', href: 'https://morpho.org/' },
  { id: 'p-uniswap', src: uniswapLogo, alt: 'Uniswap', href: 'https://app.uniswap.org/' },
  { id: 'p-coinbase-cdp', src: coinbaseCdpLogo, alt: 'Coinbase Developer Platform', href: 'https://www.coinbase.com/developer-platform' },
  { id: 'p-chainlink', src: chainlinkLogo, alt: 'Chainlink', href: 'https://chain.link/' },
  { id: 'p-thegraph', src: thegraphLogo, alt: 'The Graph', href: 'https://thegraph.com/' },
  { id: 'p-cluster', src: clusterLogo, alt: 'Cluster Protocol', href: 'https://clusterprotocol.xyz/' },
];

// ── ROW 6: US Lifestyle Apps & Web3 Analytics / L1s (8 Unique, Moving Right) ──
export const ROW_6_LOGOS: EcosystemLogo[] = [
  { id: 'us-lyft', src: lyftLogo, alt: 'Lyft', href: 'https://www.lyft.com/' },
  { id: 'us-airbnb', src: airbnbLogo, alt: 'Airbnb', href: 'https://www.airbnb.com/' },
  { id: 'us-instacart', src: instacartLogo, alt: 'Instacart', href: 'https://www.instacart.com/' },
  { id: 'us-netflix', src: netflixLogo, alt: 'Netflix', href: 'https://www.netflix.com/' },
  { id: 'us-reddit', src: redditLogo, alt: 'Reddit', href: 'https://www.reddit.com/' },
  { id: 'us-discord', src: discordLogo, alt: 'Discord', href: 'https://discord.com/' },
  { id: 'p-bubblemaps', src: bubblemapsLogo, alt: 'Bubblemaps', href: 'https://bubblemaps.io/' },
  { id: 'p-near', src: nearLogo, alt: 'NEAR', href: 'https://near.com/' },
];
