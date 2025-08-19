import { Geist, Kameron } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const kameron = Kameron({
  variable: "--font-kameron",
  subsets: ["latin"],
});


export const metadata = {
  title: "ChemDB",
  description: "ChemDB",
};

function Navbar() {
  return (
    <nav className="flex flex-row justify-between p-4 pl-24 pr-24 border-b-1 border-b-black items-center">
      <h1 className="font-[500] text-xl">ChemDB</h1>
      <a>About</a>
    </nav>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${kameron.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="flex m-4 ml-48 mr-48 border-black border-1">
          {children}
        </main>
      </body>
    </html>
  );
}
