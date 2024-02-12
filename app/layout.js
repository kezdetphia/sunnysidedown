import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "🐝 BeePolaroid Homepage", template: "%s | BeePolaroid" },
  description:
    "Welcome to BeePolaroid, where you can find a collection of dark and bright poems and thoughts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div>
          <Navbar />
          <div className="px-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
