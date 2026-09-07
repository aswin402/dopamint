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

// Crypto wallet and exchange logos
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
import mexcLogo from '../assets/crypto_logos/mexc.webp';
import krakenLogo from '../assets/crypto_logos/kraken.webp';
import jupiterLogo from '../assets/crypto_logos/jupiter.webp';
import rainbowLogo from '../assets/crypto_logos/rainbow.webp';
import zerionLogo from '../assets/crypto_logos/zerion.webp';
import oneinchLogo from '../assets/crypto_logos/oneinch.webp';
import rabbyLogo from '../assets/crypto_logos/rabby.webp';

export interface EcosystemLogo {
  id: string;
  src: string;
  alt: string;
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

// ── ROW 2: Productivity, Social & Market Intelligence (10 Unique, Moving Right) ──
export const ROW_2_LOGOS: EcosystemLogo[] = [
  { id: 'app-tradingview', src: tradingviewLogo, alt: 'TradingView' },
  { id: 'app-robinhood', src: robinhoodLogo, alt: 'Robinhood' },
  { id: 'app-coingecko', src: coingeckoLogo, alt: 'CoinGecko' },
  { id: 'app-x', src: xLogo, alt: 'X' },
  { id: 'app-discord', src: discordLogo, alt: 'Discord' },
  { id: 'ex-binance', src: logo10, alt: 'Binance' },
  { id: 'ex-coinbase', src: logo11, alt: 'Coinbase' },
  { id: 'ex-gemini', src: logo19, alt: 'Gemini' },
  { id: 'ex-kraken', src: krakenLogo, alt: 'Kraken' },
  { id: 'ex-mexc', src: mexcLogo, alt: 'MEXC' },
];

// ── ROW 3: Major Global Exchanges & Protocols (10 Unique, Moving Left) ──
export const ROW_3_LOGOS: EcosystemLogo[] = [
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
