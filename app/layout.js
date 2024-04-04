import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jobert.webdev",
  description: "Jobert Adviento Portfolio",
  icons: {
    icon: "/ja.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/ja.png" sizes="any" />
        {children}
      </body>
    </html>
  );
}
