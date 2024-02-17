// import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/footer";

// const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: { default: "🐝 BeePolaroid Homepage", template: "%s | BeePolaroid" },
  description:
    "Welcome to BeePolaroid, where you can find a collection of dark and bright poems and thoughts.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${lora.className} bg-gray-300 `}>
        <div>
          <Navbar />
          <div className="flex flex-1 flex-col justify-between h-screen ">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
