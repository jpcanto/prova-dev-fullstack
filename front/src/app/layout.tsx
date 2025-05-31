import type { Metadata } from "next";
import "./globals.css";
import { ToastifyContainer } from "@/components/shared/ToastifyContainer";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Challenge Flix",
    template: "%s | Challenge Flix",
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ToastifyContainer />
      </body>
    </html>
  );
}
