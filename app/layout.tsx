import { FunctionComponent } from "react";
import localFont from "next/font/local";
import { Space_Grotesk, Sora } from "next/font/google";
import Header from "@/components/Header";
import type RootLayoutProps from "@/types/RootLayoutProps";
import "material-icons/iconfont/material-icons.css";
import "@/styles/globals.css";

const equity = localFont({
  display: "swap",
  src: [
    {
      path: "../fonts/equity_text_b_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/equity_text_b_italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/equity_text_b_bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/equity_text_b_bold_italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-body",
});

const sora = Sora({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-headings",
});

const spaceGrotesk = Space_Grotesk({
  display: "swap",
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
        className={`text-body ${equity.variable} ${sora.variable} ${spaceGrotesk.variable}`}
      >
        <Header />
        <main className="max-w-screen pt-header-mobile md:pt-header">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
