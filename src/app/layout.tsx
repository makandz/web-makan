import { Manrope, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./ui/navbar/Navbar";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${manrope.variable} antialiased dark:text-white max-w-5xl mx-auto px-8 mb-6`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
