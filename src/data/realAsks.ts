import googleCalendarLogo from '../assets/integration_logos/google_calendar.svg';
import googleMapsLogo from '../assets/integration_logos/google_maps.svg';
import googleFlightsLogo from '../assets/integration_logos/google_flights.svg';
import uberLogo from '../assets/integration_logos/uber.svg';
import tradingviewLogo from '../assets/integration_logos/tradingview.svg';
import hyperliquidLogo from '../assets/integration_logos/hyperliquid.svg';
import xLogo from '../assets/integration_logos/x.svg';
import coinbaseLogo from '../assets/integration_logos/coinbase.svg';
import binanceLogo from '../assets/integration_logos/binance.svg';
import solscanLogo from '../assets/integration_logos/solscan.svg';

export interface IntegrationItem {
  name: string;
  domain?: string;
  iconSrc?: string;
}

export interface AskBubble {
  text: string;
  side: 'left' | 'right';
}

export interface AskCardData {
  id: string;
  isSm?: boolean;
  logos: IntegrationItem[];
  bubbles: AskBubble[];
  rotation: number;
}

export const ASK_CARDS: AskCardData[] = [
  {
    id: 'box1_flight',
    isSm: true,
    logos: [
      { name: 'Google Maps', iconSrc: googleMapsLogo },
      { name: 'Uber', iconSrc: uberLogo },
      { name: 'Google Flights', iconSrc: googleFlightsLogo },
    ],
    bubbles: [
      { text: 'your flight is boarding in 40 mins, and your food is 2 mins away. maybe start moving.', side: 'left' },
    ],
    rotation: -2.0,
  },
  {
    id: 'box2_clarity',
    isSm: true,
    logos: [
      { name: 'X', iconSrc: xLogo, domain: 'x.com' },
      { name: 'Coinbase', iconSrc: coinbaseLogo, domain: 'coinbase.com' },
    ],
    bubbles: [
      { text: "Trump's out here doing IR for CLARITY again. If Congress catches the vibe, Circle could be the read-through. Should we ape? 👀", side: 'left' },
    ],
    rotation: 2.2,
  },
  {
    id: 'box3_funding',
    isSm: true,
    logos: [
      { name: 'Hyperliquid', iconSrc: hyperliquidLogo },
      { name: 'TradingView', iconSrc: tradingviewLogo },
    ],
    bubbles: [
      { text: 'Fed rate cut looking less likely. Gold might be getting ready to send 📈', side: 'left' },
    ],
    rotation: -1.8,
  },
  {
    id: 'box4_birthday',
    isSm: false,
    logos: [
      { name: 'Google Calendar', iconSrc: googleCalendarLogo },
      { name: 'Google Maps', iconSrc: googleMapsLogo },
    ],
    bubbles: [
      { text: 'shit i forget her birthday', side: 'right' },
      { text: 'already handled. flowers at 6, dinner at 8. reminder to call her at noon.', side: 'left' },
    ],
    rotation: 2.5,
  },
  {
    id: 'box5_hype',
    isSm: false,
    logos: [
      { name: 'Hyperliquid', iconSrc: hyperliquidLogo, domain: 'hyperliquid.xyz' },
      { name: 'Binance', iconSrc: binanceLogo, domain: 'binance.com' },
    ],
    bubbles: [
      { text: 'yo, your HYPE long is getting close. liq $71.30, HYPE $74.90 and sliding. you’ve got a few % of room left.', side: 'left' },
      { text: 'shit ok how much do i need to add', side: 'right' },
    ],
    rotation: -2.8,
  },
  {
    id: 'box6_cashcat',
    isSm: false,
    logos: [
      { name: 'Solscan', iconSrc: solscanLogo, domain: 'solscan.io' },
      { name: 'Hyperliquid', iconSrc: hyperliquidLogo, domain: 'hyperliquid.xyz' },
    ],
    bubbles: [
      { text: '6 wallets that called SOL’s last two pumps just bought $340K of CASHCAT. Already up 34%. Want in? 😌', side: 'left' },
      { text: 'yeah get me $3000', side: 'right' },
    ],
    rotation: 1.8,
  },
];
