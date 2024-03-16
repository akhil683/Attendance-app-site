import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proxy Attendance",
  description: "The only app for future engineers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark">

      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center border-white">
          <Navbar /> 
        </div>
        {children}
      </body>
    </html>
  );

}
