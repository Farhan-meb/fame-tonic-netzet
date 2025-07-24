import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import { SEO_CONFIG } from "./constants/seo";
import "./globals.css";

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-figtree",
});

const urbanist = Urbanist({
    subsets: ["latin"],
    variable: "--font-urbanist",
});

export const metadata: Metadata = {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${urbanist.variable} ${figtree.variable} h-805 antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
