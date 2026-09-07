export interface NavItem {
  label: string;
  href: string;
  targetId: string;
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

export interface LegalLink {
  name: string;
  href: string;
}

export const SITE_CONFIG = {
  name: 'Dopamint',
  tagline: 'Your last App. Powered by $DOPE.',
  copyrightYear: 2026,
  nav: [
    { label: 'About', href: '#manifesto', targetId: 'manifesto' },
    { label: 'Agents', href: '#agents', targetId: 'agents' },
    { label: 'Ecosystem', href: '#ecosystem', targetId: 'ecosystem' },
  ] as NavItem[],
  socials: [
    { name: 'Twitter/X', href: 'https://x.com/dopamint', label: 'Twitter/X' },
    { name: 'Discord', href: 'https://discord.gg', label: 'Discord' },
    { name: 'Instagram', href: 'https://instagram.com', label: 'Insta' },
    { name: 'Telegram', href: 'https://t.me', label: 'Telegram' },
  ] as SocialLink[],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
  ] as LegalLink[],
};
