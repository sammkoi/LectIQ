import { Geist, Kameron } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const kameron = Kameron({
  variable: "--font-kameron",
  subsets: ["latin"],
});

export const metadata = {
  title: "LecIQ",
  description: "Quantitative Lectin-Glycan Affinity Database",
};

function Navbar() {
  return (
    <nav className="flex flex-row justify-center md:justify-between p-4 pl-24 pr-24 border-b-1 border-b-black items-center">
      <Link href="/" className="font-[500] text-xl">
        LectIQ
      </Link>
      {/* <a className="hidden md:block">About</a> */}
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${geist.variable} ${kameron.variable} antialiased h-screen flex flex-col`}
      >
        <Navbar></Navbar>
        <main className="flex flex-1 min-h-0 m-4 ml-24 mr-24 md:m-8 md:ml-48 md:mr-48">
          {children}
        </main>
      </body>
    </html>
  );
}
