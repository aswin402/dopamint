import React from 'react';

// Import newly added everyday apps & platforms
import gmailLogo from '../../../assets/app_logos/gmail.svg';
import calendarLogo from '../../../assets/app_logos/google_calendar.svg';
import mapsLogo from '../../../assets/app_logos/google_maps.svg';
import uberLogo from '../../../assets/app_logos/uber.svg';
import amazonLogo from '../../../assets/app_logos/amazon.svg';
import doordashLogo from '../../../assets/app_logos/doordash.svg';
import spotifyLogo from '../../../assets/app_logos/spotify.svg';
import notionLogo from '../../../assets/app_logos/notion.svg';
import xLogo from '../../../assets/app_logos/x.svg';
import discordLogo from '../../../assets/app_logos/discord.svg';
import tradingviewLogo from '../../../assets/app_logos/tradingview.svg';
import robinhoodLogo from '../../../assets/app_logos/robinhood.svg';
import coingeckoLogo from '../../../assets/app_logos/coingecko.svg';
import githubLogo from '../../../assets/app_logos/github.svg';
import canvaLogo from '../../../assets/app_logos/canva.svg';

// Import all unique crypto wallet and exchange logos
import logo01 from '../../../assets/crypto_logos/logo_01.webp';
import logo02 from '../../../assets/crypto_logos/logo_02.webp';
import logo03 from '../../../assets/crypto_logos/logo_03.webp';
import logo04 from '../../../assets/crypto_logos/logo_04.webp';
import logo05 from '../../../assets/crypto_logos/logo_05.webp';
import logo06 from '../../../assets/crypto_logos/logo_06.webp';
import logo07 from '../../../assets/crypto_logos/logo_07.webp';
import logo08 from '../../../assets/crypto_logos/logo_08.webp';
import logo09 from '../../../assets/crypto_logos/logo_09.webp';
import logo10 from '../../../assets/crypto_logos/logo_10.webp';
import logo11 from '../../../assets/crypto_logos/logo_11.webp';
import logo13 from '../../../assets/crypto_logos/logo_13.webp';
import logo14 from '../../../assets/crypto_logos/logo_14.webp';
import logo15 from '../../../assets/crypto_logos/logo_15.webp';
import logo16 from '../../../assets/crypto_logos/logo_16.webp';
import logo17 from '../../../assets/crypto_logos/logo_17.webp';
import logo18 from '../../../assets/crypto_logos/logo_18.webp';
import logo19 from '../../../assets/crypto_logos/logo_19.webp';
import mexcLogo from '../../../assets/crypto_logos/mexc.webp';
import krakenLogo from '../../../assets/crypto_logos/kraken.webp';
import jupiterLogo from '../../../assets/crypto_logos/jupiter.webp';
import rainbowLogo from '../../../assets/crypto_logos/rainbow.webp';
import zerionLogo from '../../../assets/crypto_logos/zerion.webp';
import oneinchLogo from '../../../assets/crypto_logos/oneinch.webp';
import rabbyLogo from '../../../assets/crypto_logos/rabby.webp';

// ── ROW 1: Everyday Lifestyle & Consumer Apps (10 Unique, Moving Left) ──
const ROW_1_LOGOS = [
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
const ROW_2_LOGOS = [
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
const ROW_3_LOGOS = [
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
const ROW_4_LOGOS = [
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

export const CryptoLogosMarquee: React.FC = () => {
  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 overflow-hidden relative space-y-3 sm:space-y-5">
      
      {/* Category Eyebrow */}
      <div className="text-center mb-2 sm:mb-2.5">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8e4d5] border border-[#d6cfbe] text-[11px] font-mono tracking-widest text-[#3d4a3a] uppercase font-semibold">
          SUPPORTED WALLETS &amp; EXCHANGES
        </span>
      </div>

      {/* Editorial Headline: Any app. Any exchange. One Dope. */}
      <div className="text-center w-full max-w-6xl mx-auto mb-6 sm:mb-10 lg:mb-14 pb-2 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[66px] tracking-tight text-[#2d3e32] font-serif font-normal leading-[1.08]">
          Any app. Any exchange. One{' '}
          <span className="font-serif italic font-bold text-[#253b2b]">
            Dope.
          </span>
        </h2>
      </div>

      {/* Main 4-Row Marquee Track Wrapper with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden space-y-3 sm:space-y-4 lg:space-y-5">
        
        {/* Left Gradient Fade (Covers all 4 Rows) */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-r from-[#f3f2e6] via-[#f3f2e6]/90 to-transparent z-20" />

        {/* Right Gradient Fade (Covers all 4 Rows) */}
        <div className="pointer-events-none absolute right-0 inset-y-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-l from-[#f3f2e6] via-[#f3f2e6]/90 to-transparent z-20" />

        {/* ── ROW 1: Consumer & Daily Apps (Moving LEFT) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max shrink-0 items-center animate-crypto-marquee-left group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_1_LOGOS.map((logo) => (
              <div
                key={`r1-a-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
            {/* Seamless Continuation */}
            {ROW_1_LOGOS.map((logo) => (
              <div
                key={`r1-b-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 2: Productivity, Social & Market Intel (Moving RIGHT) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max shrink-0 items-center animate-crypto-marquee-right group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_2_LOGOS.map((logo) => (
              <div
                key={`r2-a-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
            {/* Seamless Continuation */}
            {ROW_2_LOGOS.map((logo) => (
              <div
                key={`r2-b-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 3: Major Global Exchanges & Protocols (Moving LEFT) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max shrink-0 items-center animate-crypto-marquee-left group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_3_LOGOS.map((logo) => (
              <div
                key={`r3-a-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
            {/* Seamless Continuation */}
            {ROW_3_LOGOS.map((logo) => (
              <div
                key={`r3-b-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 4: Web3 Wallets, Hardware & Custody (Moving RIGHT) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max shrink-0 items-center animate-crypto-marquee-right group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_4_LOGOS.map((logo) => (
              <div
                key={`r4-a-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
            {/* Seamless Continuation */}
            {ROW_4_LOGOS.map((logo) => (
              <div
                key={`r4-b-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
