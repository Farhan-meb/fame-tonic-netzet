export const SITE_CONFIG = {
    name: "Fame Tonic",
    description: "Turn Social Media Into a Profitable Career",
    year: "2025",
} as const;

export const ANNOUNCEMENT_BAR = {
    title: "🚀 FRESH BEGINNINGS SALE:",
    subtitle: "Extra 25% OFF, Limited Spots - start your journey today!",
} as const;

export const NAVIGATION = {
    items: [
        { label: "About us", href: "#" },
        { label: "Contact", href: "#" },
    ],
} as const;

export const HERO_SECTION = {
    title: "Want to Turn Social Media Into a Profitable Career?",
    subtitle: "Discover your way to success with Fametonic:",
    features: [
        "Start growing your influence right away—no waiting required!",
        "Create viral TikToks and Reels step by step with easy-to-follow lessons",
        "Use a Personal AI Worker to boost your content",
        "Learn from expert-led courses designed for aspiring influencers",
    ],
    cta: {
        buttonText: "GET STARTED",
        description: "1-minute quiz for personalized Insights",
    },
} as const;

export const LEGAL_DISCLAIMER = {
    legal: 'By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms',
    copyright: `Fametonic ${SITE_CONFIG.year} ©All Rights Reserved.`,
} as const;
