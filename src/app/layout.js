import { Inter } from "next/font/google";
import SideBar from "@/components/Sidebar";
import Case from './images/case.png';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-contain">
        <SideBar />
        </div>
        {children}
      </body>
    </html>
  );
}