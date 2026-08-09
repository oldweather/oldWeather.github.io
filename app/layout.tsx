import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Lora({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://oldweather.org"),
  title: "Old Weather — Citizen science for climate history",
  description: "The legacy of Old Weather, a citizen-science project that recovered historic observations from ships’ logbooks.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Old Weather",
    description: "The legacy of a citizen-science project for climate history.",
    url: "https://oldweather.org",
    siteName: "Old Weather",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Old Weather — Ship logs. Citizen science. Climate history." }],
  },
  twitter: { card: "summary_large_image", title: "Old Weather", description: "The legacy of a citizen-science project for climate history.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
