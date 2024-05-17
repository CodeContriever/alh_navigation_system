import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lincoln University",
  description: "Lincoln University website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* <link rel="shortcut icon" href="/timsan_logo.png" /> */}</head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
