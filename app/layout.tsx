import "./globals.css";

import { Lato, Bebas_Neue } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div
          className="absolute inset-0 bg-cover bg-left"
          style={{
            backgroundImage: "url('/background_login.webp')",
            opacity: 0.6,
          }}
          role="presentation"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
