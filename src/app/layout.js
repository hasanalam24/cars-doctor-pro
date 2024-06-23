import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/Components/Shared/Navber";
import Footer from "@/Components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Cars repairing workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={inter.className}>
        <Navber></Navber>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
