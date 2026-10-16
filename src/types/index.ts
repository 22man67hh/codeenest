export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: 'Code' | 'Smartphone' | 'Search' | 'ShieldCheck' | 'TrendingUp' | 'Megaphone' | 'Headphones' | 'Zap';
  features: string[];
  highlightColor?: string;
  popular?: boolean;
}

export interface ValueMarker {
  id: string;
  title: string;
  description: string;
  iconName: 'Target' | 'Megaphone' | 'TrendingUp' | 'Shield';
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  turnaround: string;
  isPopular?: boolean;
  ctaText: string;
  idealFor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface PortfolioCase {
  id: string;
  type: 'website' | 'meta_ads';
  title: string;
  client: string;
  industry: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
    growth?: string;
  }[];
  description: string;
  livePreviewUrl?: string;
}
