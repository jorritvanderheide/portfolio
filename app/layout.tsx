import { FunctionComponent } from "react";
import { Space_Grotesk, Sora, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import type RootLayoutProps from "@/types/RootLayoutProps";
import "material-icons/iconfont/material-icons.css";
import "@/styles/globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-headings",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Portfolio Jorrit v/d Heide",
  description: "Portfolio Jorrit van der Heide",
};

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`bg-white text-body ${openSans.variable} ${sora.variable} ${spaceGrotesk.variable}}`}
      >
        <Header />
        <main className="absolute w-screen pt-header-mobile md:pt-header">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
