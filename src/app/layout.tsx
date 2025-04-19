import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matt Harvey Ostulano",
  description:
    "A UI/UX Designer who is passionate about creating user-friendly designs for applications, websites, and engaging web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className}  antialiased`}>{children}</body>
    </html>
  );
}
