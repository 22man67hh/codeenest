import { ServiceItem, ValueMarker, PricingPlan, FaqItem, PortfolioCase } from '../types';

export const BRAND = {
  name: "CodeNest",
  tagline: "Build • Grow • Succeed",
  heroBadge: "MODERN WEBSITE DEVELOPMENT & DESIGN",
  heroHeadline: "Turn Your Ideas Into Reality. Get A Website That Brings Customers.",
  heroSubheadline: "We design clean, ultra-fast, mobile-responsive websites that give your business a credible, high-converting digital home — with optional Meta ad boosting when you are ready to scale.",
  whatsappNumber: "+1234567890", // easily customizable
  whatsappDefaultMsg: "Hi CodeNest! I'm looking to build a modern, fast website for my business.",
  email: "hello@codenest.dev",
  turnaroundTime: "72 Hours",
};

export const VALUE_MARKERS: ValueMarker[] = [
  {
    id: "targeted-audience",
    title: "Targeted Audience",
    description: "Reach people who actually care about your business.",
    iconName: "Target",
  },
  {
    id: "better-engagement",
    title: "Better Engagement",
    description: "Keep visitors engaged with crisp design & clean layouts.",
    iconName: "Megaphone",
  },
  {
    id: "higher-conversions",
    title: "Higher Conversions",
    description: "Turn casual visitors into loyal paying customers.",
    iconName: "TrendingUp",
  },
  {
    id: "trusted-support",
    title: "Trusted Support",
    description: "Guidance and 24/7 direct support throughout your journey.",
    iconName: "Shield",
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "website-dev",
    title: "Website Development",
    subtitle: "Modern Websites. Real Business Results.",
    description: "We craft clean, mobile-optimized, fast-loading websites built from scratch to present your brand with credibility and turn visitors into inquiries.",
    badge: "Flagship Service",
    iconName: "Code",
    popular: true,
    features: [
      "Custom Design tailored to your brand identity",
      "100% Mobile & Tablet Responsive Layouts",
      "Built-in Local SEO Friendly structure",
      "Fast & Secure Performance (Sub-second load times)"
    ]
  },
  {
    id: "local-seo",
    title: "Local SEO & Google Setup",
    subtitle: "Get Found By Nearby Customers.",
    description: "Make sure local buyers find your website first on Google search and map listings with proper schema and speed scores.",
    badge: "Search Visibility",
    iconName: "Search",
    popular: false,
    features: [
      "Google Business Profile Setup & verification assistance",
      "High-intent local keywords & meta tagging",
      "Local schema markup & map pack visibility",
      "Speed optimization score 95+ on Google PageSpeed"
    ]
  },
  {
    id: "support-hosting",
    title: "Managed Hosting & Support",
    subtitle: "Peace Of Mind. 99.9% Uptime.",
    description: "Never worry about broken links, server updates, or SSL certificates. We keep your website running smoothly 24/7.",
    badge: "Zero Hassle",
    iconName: "Headphones",
    popular: false,
    features: [
      "Ultra-fast cloud CDN hosting & free SSL security",
      "Regular backups & malware monitoring",
      "Content updates, pricing changes & menu tweaks",
      "Direct WhatsApp access to your developer"
    ]
  },
  {
    id: "meta-ads",
    title: "Meta Ads Boosting (Optional Add-On)",
    subtitle: "Need Extra Traffic? We've Got You Covered.",
    description: "When you're ready to amplify your reach, we run targeted Facebook & Instagram ads to direct local customers straight to your new website or WhatsApp.",
    badge: "Growth Add-On",
    iconName: "Zap",
    popular: false,
    features: [
      "Laser targeted local audiences by location and interests",
      "Scroll-stopping visual creatives & compelling copy",
      "Direct Click-to-WhatsApp & inquiry routing",
      "Full ad campaign setup & clear performance reporting"
    ]
  }
];

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: "site-dentist-flow",
    type: "website",
    title: "Modern 1-Page Business Website",
    client: "Apex Dental & Aesthetics",
    industry: "Healthcare & Clinic",
    tags: ["High-Converting", "1-Page", "Mobile-First", "72h Delivery"],
    description: "Crafted a lightning-fast single-page landing site designed with instant WhatsApp appointment booking, clear service pricing, and glowing patient reviews.",
    metrics: [
      { label: "Page Load Speed", value: "0.68s", growth: "+340% faster" },
      { label: "Mobile Booking Rate", value: "24.6%", growth: "+88% uplift" },
      { label: "Google PageSpeed", value: "99/100", growth: "Grade A" }
    ]
  },
  {
    id: "meta-campaign-bistro",
    type: "meta_ads",
    title: "Meta Ads Boosting: Local Lead Surge",
    client: "Artisan Woodfire Pizzeria",
    industry: "Restaurant & Hospitality",
    tags: ["Facebook Ads", "Instagram Boost", "Direct WhatsApp Leads"],
    description: "Executed localized radius Meta ad campaigns targeting food enthusiasts within 8km. Delivered mouth-watering video reels and direct table reservation vouchers.",
    metrics: [
      { label: "Total Ad Reach", value: "148,200", growth: "+420%" },
      { label: "Direct Inquiries", value: "624 Messages", growth: "$0.48 / lead" },
      { label: "ROAS (Return on Spend)", value: "5.8x", growth: "Verified Sales" }
    ]
  },
  {
    id: "site-solar-plus",
    type: "website",
    title: "Lead Generation Hub",
    client: "NexGen Solar Solutions",
    industry: "Clean Energy & Roofing",
    tags: ["Interactive Calculator", "SEO Optimized", "Responsive"],
    description: "Designed a clean, modern landing page with an interactive savings calculator that collects verified homeowner leads directly into their inbox.",
    metrics: [
      { label: "Monthly Qualified Leads", value: "94+", growth: "+160%" },
      { label: "Bounce Rate", value: "28%", growth: "-42% drop" },
      { label: "Conversion Rate", value: "14.2%", growth: "Top 5% in industry" }
    ]
  },
  {
    id: "meta-fitness-launch",
    type: "meta_ads",
    title: "Meta Ads Member Acquisition",
    client: "Pulse Functional Fitness",
    industry: "Health & Fitness",
    tags: ["Instagram Ads", "Retargeting", "Offer Testing"],
    description: "Targeted desk workers and fitness enthusiasts with a 7-day trial pass offer. Leveraged UGC creatives and carousel testimonials.",
    metrics: [
      { label: "New Member Signups", value: "118", growth: "In 14 Days" },
      { label: "Cost Per Acquisition", value: "$9.20", growth: "-55% below avg" },
      { label: "Ad Click-Through (CTR)", value: "4.15%", growth: "3.2x benchmark" }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-web-launch",
    name: "Standard 1-Page Launch",
    tagline: "A clean, modern online presence built to turn visitors into buyers.",
    price: "$299",
    period: "one-time",
    badge: "Most Popular",
    isPopular: true,
    description: "Ideal for local businesses, clinics, cafes, contractors, and service providers who need a sharp, mobile-friendly website up and running in 72 hours.",
    turnaround: "Fast 72-Hour Delivery",
    idealFor: "Service businesses, salons, consultants, contractors",
    ctaText: "Launch My Website",
    features: [
      "Custom Modern 1-Page Responsive Design",
      "100% Mobile & Tablet Optimized",
      "Direct Click-to-WhatsApp & Call Buttons",
      "Interactive Contact & Lead Booking Form",
      "High Speed Optimization (Google PageSpeed 90+)",
      "Basic On-Page Local SEO Setup",
      "Domain & Cloud Hosting Configuration",
      "NO Monthly Retainers (You 100% own the site)"
    ]
  },
  {
    id: "plan-web-multi",
    name: "Multi-Section Web Expansion",
    tagline: "More space for your services, portfolio galleries, and customer reviews.",
    price: "$449",
    period: "one-time",
    badge: "Full Showcase",
    description: "For businesses that require dedicated service breakdowns, expanded team or gallery sections, and comprehensive local SEO pages.",
    turnaround: "4-5 Days Delivery",
    idealFor: "Established brands, clinics, restaurants with large menus",
    ctaText: "Choose Multi-Section",
    features: [
      "Up to 4-5 Custom Content Sections / Sub-pages",
      "Custom Photo Gallery & Testimonial Carousel",
      "Advanced Local SEO Schema & Keyword Targeting",
      "Interactive FAQ Accordion & Booking Integration",
      "Mobile-First Responsive Layouts",
      "Free 30 Days Hosting & Support Assistance",
      "Direct Priority WhatsApp Developer Line",
      "100% Source Code & Asset Ownership"
    ]
  },
  {
    id: "plan-combo-growth",
    name: "Website + Ads Boost Bundle",
    tagline: "Launch your modern site AND jumpstart your initial traffic.",
    price: "$499",
    period: "launch bundle",
    badge: "Best Value",
    description: "Get your new 1-page website built and immediately boosted with an initial local Meta ad campaign (Facebook & Instagram) to welcome your first wave of visitors.",
    turnaround: "72-Hour Rapid Launch",
    idealFor: "Businesses ready to make a splash in their local area",
    ctaText: "Get The Launch Bundle",
    features: [
      "EVERYTHING in Standard 1-Page Launch",
      "Targeted Local Meta Ads Campaign Setup",
      "Custom Ad Creatives & Copywriting included",
      "Meta Pixel & Conversion Tracking Installed",
      "Direct Routing to your new site & WhatsApp",
      "Weekly Performance & Lead Reporting",
      "Zero Monthly Lock-In Contracts",
      "Full ownership of ad accounts & assets"
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-turnaround",
    question: "What is your turnaround time?",
    answer: "Our standard turnaround time is 72 hours for a Standard 1-Page website! Once we receive your business details, logo, and core service info, your draft will be ready for review within 3 days. Meta ads campaigns can usually be launched within 48 to 72 hours."
  },
  {
    id: "faq-domain-hosting",
    question: "Do you handle domain and hosting?",
    answer: "Yes! We guide you step-by-step through registering your custom domain (like yourbusiness.com) or configure it for you. We can host your website on ultra-fast, modern cloud servers with free SSL security, or deploy it onto your existing hosting provider."
  },
  {
    id: "faq-sales-guarantee",
    question: "Do you guarantee sales with Meta boosting?",
    answer: "While no honest marketer can legally guarantee exact sales figures (as closing also depends on your pricing, product, and sales follow-up), we DO guarantee targeted reach, optimized ad placements, and laser-focused copywriting that drives qualified clicks, phone calls, and direct WhatsApp inquiries from people in your target location."
  },
  {
    id: "faq-progress-updates",
    question: "Can I see progress updates?",
    answer: "Absolutely. Transparency is our top freelance advantage. You get direct WhatsApp access to the developer/marketer working on your project. You will receive staging preview links to test your site on your own phone before it goes live, along with real-time ad performance metrics."
  },
  {
    id: "faq-retainers",
    question: "Are there any hidden monthly agency retainers?",
    answer: "No! Unlike traditional digital agencies that lock small business owners into $1,500/month retainers with 6-month contracts, CodeNest operates with transparent freelance pricing. You only pay for what you need, when you need it."
  },
  {
    id: "faq-own-website",
    question: "Do I 100% own my website and ad accounts after launch?",
    answer: "Yes, 100%. We believe your digital assets belong to you. You retain full ownership of all source code, domain name, Meta Ad Account, and Facebook/Instagram assets with no hostage fees."
  }
];
