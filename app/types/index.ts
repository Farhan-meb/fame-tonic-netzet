export interface NavigationItem {
    label: string;
    href: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary";
    showArrow?: boolean;
    fullWidth?: boolean;
}

export interface FeatureItemProps {
    text: string;
    icon?: string;
}

export interface SiteConfig {
    name: string;
    description: string;
    year: string;
}
