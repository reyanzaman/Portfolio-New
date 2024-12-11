import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Reyan Zaman (KAUZ)",
  description: "Portfolio of  Reyan Zaman (KAUZ)",
  openGraph: {
    title: "Reyan Zaman (KAUZ)",
    description: "Portfolio of Reyan Zaman (KAUZ)",
    images: [
      {
        url: "https://res.cloudinary.com/dreac336r/image/upload/v1733926322/Portfolio/KAUZ.png",
        width: 950,
        height: 640,
        alt: "Reyan Zaman (Khandoker Ashik Uz Zaman)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
