import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'Chai Vaai Cafe | Your Cozy Corner in the Hills',
  description: 'Discover Chai Vaai Cafe in Dehradun – your perfect spot for authentic kulhad chai, delicious snacks, and a warm, inviting ambiance. Ideal for friends, students, and couples.',
  keywords: ["chai cafe dehradun, kulhad chai, cozy cafe, best cafe dehradun, snacks, coffee, hangout spot, cafe in hills, dehradun food"],
  openGraph: {
    "title": "Chai Vaai Cafe | Your Cozy Corner in the Hills",
    "description": "Discover Chai Vaai Cafe in Dehradun – your perfect spot for authentic kulhad chai, delicious snacks, and a warm, inviting ambiance. Ideal for friends, students, and couples.",
    "url": "https://chaivaaicafe.com",
    "siteName": "Chai Vaai Cafe",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/cream-liquer_23-2148014925.jpg",
        "alt": "Cozy cafe interior with people enjoying chai"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Chai Vaai Cafe | Your Cozy Corner in the Hills",
    "description": "Discover Chai Vaai Cafe in Dehradun – your perfect spot for authentic kulhad chai, delicious snacks, and a warm, inviting ambiance. Ideal for friends, students, and couples.",
    "images": [
      "http://img.b2bpic.net/free-photo/cream-liquer_23-2148014925.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
