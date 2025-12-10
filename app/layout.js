import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Brooks Built Marketing | Full-Service Digital Marketing Agency in Cypress, TX",
    template: "%s | Brooks Built Marketing"
  },
  description: "Full-service marketing agency specializing in paid advertising, social media management, and creative services. Drive real results with Brooks Built Marketing in Cypress, Texas.",
  keywords: ["marketing agency", "paid ads", "social media management", "digital marketing", "Cypress TX marketing", "Houston marketing agency", "Meta ads", "Google ads", "TikTok ads"],
  authors: [{ name: "Brooks Built Marketing" }],
  creator: "Brooks Built Marketing",
  publisher: "Brooks Built Marketing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brooksbuiltmarketing.com",
    siteName: "Brooks Built Marketing",
    title: "Brooks Built Marketing | Full-Service Digital Marketing Agency",
    description: "Drive real results with our comprehensive marketing services including paid advertising, social media management, and creative services.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Brooks Built Marketing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Brooks Built Marketing | Full-Service Digital Marketing",
    description: "Drive real results with our comprehensive marketing services",
    images: ["/images/logo.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.jpg" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
