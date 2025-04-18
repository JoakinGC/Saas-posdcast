import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider  from "@/providers/ConvexClerkProvider";
import AudioProvider  from "@/providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcast",
  description: "Generated your podcasts using IA",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <AudioProvider>
      <html lang="en">
        
          <body className={manrope.className}>
            {children}
          </body>
        
      </html>
      </AudioProvider>
    </ConvexClerkProvider>
  );
}
