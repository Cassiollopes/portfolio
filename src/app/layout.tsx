import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de Cassio Lopes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${inter.className} ${geistSans.variable} antialiased scroll-smooth px-5 pt-20 max-md:pt-12 pb-24 select-none`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
