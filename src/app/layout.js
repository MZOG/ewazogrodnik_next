import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/common/header"
import Footer from "@/components/common/footer"

export const metadata = {
  title: {
    template: '%s | Ewa Zogrodnik',
    default: 'Ewa Zogrodnik'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-rose-100 text-pretty text-primary`}>
        <Header />
        <main>
          {children}  
        </main>
        <Footer />
      </body>
    </html>
  );
}
