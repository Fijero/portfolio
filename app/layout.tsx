import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  icons: [],
  title: "Chukwuemezie Emmanuel Uzoma",
  description: "Chukwuemezie Emmanuel Uzoma's Portfolio || Software Engineer Full Stack Engineer",
  keywords: [
    "Chukwuemezie",
    "chukwuemezie Emmanuel",
    "chukwuemezie emmanuel uzoma",
    "flutter developer",
    "node js developer",
    "software engineer",
    "software developer in owerri",
    "mobile app developer",
    "mobile app developer in owerri",
    "backend developer",
    "backend developer in owerri",
    "node js backend developer",
    "flutter developer in owerri",
    "website developer in owerri",
    "best mobile app developer in nigeria",
    "best mobile app developer in imo state",
    "best mobile app developer in owerri",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
