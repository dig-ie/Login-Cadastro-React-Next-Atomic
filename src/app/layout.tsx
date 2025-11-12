import type { Metadata, Viewport } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Login/Cadastro - React.js/Next.js",
  description:
    "Módulo e UX/UI de Autenticação implementado propositalmente utilizando React/Next no Client-Side mantendo a lógica de autenticação dentro dos Organisms e preservando os Forms como moléculas controláveis (Atomic Design).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={robotoFlex.variable}>
      <body
        className={`${robotoFlex.variable} antialiased bg-(--color-primary)`}
      >
        {children}
      </body>
    </html>
  );
}
