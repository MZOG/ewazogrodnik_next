import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ewa Zogrodnik",
  description: "TODO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children} 
      </body>
    </html>
  );
}
