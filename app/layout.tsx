import type { Metadata } from "next";
import "./globals.css";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muzaffer Kadir YILMAZ",
  description: "Muzaffer Kadir YILMAZ's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container-outer">
          {children}
        </div>
      </body>
    </html>
  );
}
