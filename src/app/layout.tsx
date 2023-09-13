import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidemenu from "@/components/Sidemenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "An Image Gallery App with Cloudinary Next features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto flex flex-col md:flex-row md:h-[90vh]">
          <div className="w-full md:w-1/5 md:border-r-2">
            <Sidemenu />
          </div>
          <div className="w-full p-4 ">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
