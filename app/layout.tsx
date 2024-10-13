import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Menu from "@/components/app-bar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "NEXT ELECTRON APP",
  description: "NEXT ELECTRON APP,APP ROUTE",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "h-dvh bg-background font-sans antialiased flex flex-col",
          `${geistSans.variable} ${geistMono.variable}`
        )}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
