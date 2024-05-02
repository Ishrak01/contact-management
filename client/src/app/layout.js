import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import ReduxProvider from "./Redux/ReduxProvider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact Us Management App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ReduxProvider>
       <Toaster position="top-right" /> 
        {children}
        </ReduxProvider>
        </body>
    </html>
  );
}
